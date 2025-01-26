"use client"

// import { convertFileToUrl } from '@/lib/utils'
import Image from 'next/image'
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

type FileUploaderProps = {
    files: File[] | undefined,
    onChange: (files: File[]) => void
}

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

const FileUploader = ({ files, onChange }: FileUploaderProps) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Do something with the files
        onChange(acceptedFiles)
    }, [onChange])
    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()} className='file-upload'>
            <input {...getInputProps()} />
            {files && files?.length > 0 ? (
                <Image
                    src={convertFileToUrl(files[0])}
                    width={300}
                    height={200}
                    alt='uploaded image'
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
                        <p>PDF, DOCX, ...</p>
                    </div>
                </>
            )}
        </div>
    )
}

export default FileUploader;