import React, { useState } from "react";

interface FileUploaderProps {
  onFileUpload: (url: string) => void; 
}

const FileUploader: React.FC<FileUploaderProps> = ({onFileUpload}) => {
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setSelectedFileName(file.name); // Show file name only
      onFileUpload(file); // Pass the file to parent component for later upload
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Receipt photo</label>
      <div className="mt-2 flex flex-col items-center justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-md">
        <label
          htmlFor="file-upload"
          className="relative cursor-pointer text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500 mb-4"
        >
          <span>Upload receipt image</span>
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            accept=".png, .jpeg, .jpg, .heic, .pdf"
            className="sr-only"
            onChange={handleFileChange}
          />
        </label>
        {selectedFileName && (
          <div className="text-sm text-gray-500">
            Selected file: {selectedFileName}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
