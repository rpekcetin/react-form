import { Box, ImageList, ImageListItem, Typography } from '@mui/material';
import React, { useState } from 'react';
import { WrappedFieldProps } from 'redux-form';

interface FileInputProps extends WrappedFieldProps {
    label: string;
}

const FileInput: React.FC<FileInputProps> = ({ input: { onChange }, label }) => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files ? Array.from(event.target.files) : [];
        setSelectedFiles(files)
        onChange(files)
    };

    return (
        <div>
            <Typography variant='h6' fontWeight={700} textAlign={'center'}>{label}</Typography>
            <Box sx={{ width: '100%', height: 450, overflowY: 'scroll' }}>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {selectedFiles.map((file, index) => (
                        <ImageListItem key={index}>
                            <img
                                srcSet={`${URL.createObjectURL(file)}`}
                                src={`${URL.createObjectURL(file)}`}
                                alt={URL.createObjectURL(file)}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
            <input
                type="file"
                accept='image/*'
                onChange={handleFileChange}
                multiple
            />
        </div>
    );
};

export default FileInput;
