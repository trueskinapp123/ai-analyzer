import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
}

export function ImageUpload({ onImageUpload }: ImageUploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onImageUpload(acceptedFiles[0]);
    }
  }, [onImageUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    multiple: false
  });

  return (
    <div
      {...getRootProps()}
      className={`w-full max-w-xl p-8 border-2 border-dashed rounded-xl cursor-pointer transition-colors
        ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center text-center">
        <Upload className="w-12 h-12 mb-4 text-gray-400" />
        <p className="text-xl font-medium text-gray-700">
          {isDragActive ? 'Drop your image here' : 'Drag & drop your skin photo here'}
        </p>
        <p className="mt-2 text-sm text-gray-500">
          or click to select a file from your device
        </p>
        <p className="mt-4 text-xs text-gray-400">
          Supported formats: JPEG, PNG • Max file size: 10MB
        </p>
      </div>
    </div>
  );
}