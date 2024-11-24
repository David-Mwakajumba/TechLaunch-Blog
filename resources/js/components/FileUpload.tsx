import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";

interface FileUploadProps {
    onFileSelect: (file: File) => void;
}

export default function FileUpload({ onFileSelect }: FileUploadProps) {
    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            if (acceptedFiles.length > 0) {
                onFileSelect(acceptedFiles[0]);
            }
        },
        [onFileSelect]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        // accept: {
        //     "image/*": [".jpeg", ".jpg", ".png", ".pdf"],
        // },
        maxSize: 30 * 1024 * 1024, // 30MB
        multiple: false,
    });

    return (
        <div
            {...getRootProps()}
            className={`border border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
        ${
            isDragActive
                ? "border-red-500 bg-red-50"
                : "border-gray-200 hover:border-red-500"
        }`}
        >
            <input {...getInputProps()} />
            <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
            <p className="text-sm text-gray-600">
                Click to upload or drag and drop
            </p>
            <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg text-sm">
                Browse File
            </button>
        </div>
    );
}
