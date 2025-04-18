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
                <div className='flex flex-col items-center justify-center w-[798px] gap-8'>
                    <h3 className='font-semibold text-[24px]'>Let's Transform Your Document</h3>
                    <div className='bg-[#FDFDFD] border rounded-3xl items-center border-[#D8D8D8] flex flex-col p-12 gap-6 '>
                        <img src="/gif/Docs animation gif.gif" alt="aniamtion" className='' />
                    </div>
                </div>
            ) : (
                <div className='flex flex-col items-center justify-center w-[798px] gap-8'>
                    <h3 className='font-semibold text-[24px]'>Let's Transform Your Document</h3>
                    <div className='bg-[#FDFDFD] border rounded-3xl items-center border-[#D8D8D8] flex flex-col p-12 gap-6'>
                        <div className='border-[4px] py-6 border-[#239B88] border-dashed rounded-[16px] flex flex-col items-center justify-center gap-5 w-full'>
                            <div className='bg-[#EAFBF9] rounded-full p-[10px] items-center justify-center'>
                                <img src="/assets/document-text.svg" alt="document" />
                            </div>
                            <p className='text-center text-[#8A8A8A]'>
                                Drop Your Document Here
                                <br />
                                (We promise to treat it with respect)
                            </p>
                        </div>
                        <p className='text-[#8A8A8A] font-semibold bg-[#F3F3F3] py-1 px-2'>We're friends with .docx, .pdf, Google Docs, and plain text</p>
                    </div>
                </div>
            )
            }
        </div >
    )
}

export default FileUploader;