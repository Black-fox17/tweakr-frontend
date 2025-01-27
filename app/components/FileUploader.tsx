"use client"

// import { convertFileToUrl } from '@/lib/utils'
import Image from 'next/image'
import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { getFileType } from '@/lib/utils'

type FileUploaderProps = {
    files: File[] | undefined,
    onChange: (files: File[]) => void
}

const allowedExtensions = [
    "pdf",
    "doc",
    "docx",
    "txt"
];

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

const FileUploader = ({ files, onChange }: FileUploaderProps) => {
    const [error, setError] = useState<string | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const invalidFiles = acceptedFiles.filter((file) => {
            const { type, extension } = getFileType(file.name);
            return type === "Undefined" || !allowedExtensions.includes(extension);
        });

        if (invalidFiles.length > 0) {
            setError(
                `Invalid file type. Only the following types are allowed: ${allowedExtensions.join(
                    ", "
                )}`
            );
            return;
        }
        setError(null); // Clear any previous errors
        onChange(acceptedFiles);
    },
        [onChange]
    )
    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()} className='file-upload'>
            <input {...getInputProps()} />
            {files && files?.length > 0 ? (
                <Image
                    src={convertFileToUrl(files[0])}
                    width={300}
                    height={200}
                    alt='uploaded a file'
                    className='h-auto overflow-hidden object-cover'
                />
            ) : (
                <>
                    <Image
                        src="/assets/icons/upload.svg"
                        width={60}
                        height={60}
                        alt='upload'
                        className='bg-brand rounded-full p-3'
                    />
                    <div className='file-upload_label'>
                        <p className='text-14-regular'>
                            <span className='text-green-500'>click to upload</span> or drag and drop
                        </p>
                        <p>Allowed types: PDF, DOCX, TXT, ...</p>
                    </div>
                </>
            )}
            <div>
                {
                    error && (
                        <p className="text-red-500 text-sm mt-2">
                            {error}
                        </p>
                    )
                }
            </div >
        </div>
    )
}

export default FileUploader;