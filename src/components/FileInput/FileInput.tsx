// FileInput.tsx

import React, { useEffect, useState } from 'react';
import { WrappedFieldProps } from 'redux-form';
import { Grid, Typography, Box, ImageList, ImageListItem } from '@mui/material';
import { FileMeta } from './types/types'

interface FileInputProps extends WrappedFieldProps {
    label: string;
    isRead?: boolean
}

const FileInput: React.FC<FileInputProps> = ({ input: { value, onChange }, label, isRead }) => {
    const [files, setFiles] = useState<FileMeta[]>([]);

    useEffect(() => {
        if (value && Array.isArray(value)) {
            setFiles(value);
        }
    }, [value]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files ? Array.from(event.target.files) : [];
        const fileMetas = selectedFiles.map(file => ({
            name: file.name,
            size: file.size,
            preview: URL.createObjectURL(file),
        }));

        setFiles(fileMetas);
        onChange(fileMetas); // Form state'ine dosya meta verilerini ekleyin
    };

    return (
        <>
            <Grid container justifyContent={'center'} alignItems={'center'} gap={3}>
                <Typography variant='h6' fontWeight={700} textAlign={'center'}>{label}</Typography>
                <Box sx={{ width: '100%', height: 250, overflowY: 'scroll', border: '1px dashed', borderRadius: '10px' }}>
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {files.map((file, index) => (
                            <ImageListItem key={index}>
                                <img
                                    src={file.preview}
                                    alt={file.name}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>

                {
                    isRead ??
                    <input
                        type="file"
                        accept='image/*'
                        onChange={handleFileChange}
                        multiple
                        required
                        id="file-input"
                    />}
            </Grid>
        </>
    );
};

export default FileInput;
