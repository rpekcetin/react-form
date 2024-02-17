import { Box, Grid, ImageList, ImageListItem, Typography } from '@mui/material';
import React, { useState } from 'react';
import { WrappedFieldProps } from 'redux-form';

interface FileInputProps extends WrappedFieldProps {
    label: string;
    name: string
}

const FileInput: React.FC<FileInputProps> = ({ input: { onChange, name }, label, meta: { error } }) => {
    const [touched, setTouched] = useState<boolean>(false)
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files ? Array.from(event.target.files) : [];
        setSelectedFiles(files);
        onChange(files);
        setTouched(true)
    };

    console.log(error, touched)
    return (
        <>
            <Grid container justifyContent={'center'} alignItems={'center'} gap={3}>
                <Typography variant='h6' fontWeight={700} textAlign={'center'}>{label}</Typography>
                <Box sx={{ width: '100%', height: 250, overflowY: 'scroll', border: '1px ', borderStyle: 'dashed', borderRadius: '10px' }}>
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
                {touched && error && (
                    <Typography color="error" variant="body2" style={{ marginTop: '8px' }}>
                        {error}
                    </Typography>
                )}
                <input
                    type="file"
                    accept='image/*'
                    onChange={handleFileChange}
                    multiple
                    name={name}
                    required
                />
            </Grid>
        </>
    );
};

export default FileInput;
