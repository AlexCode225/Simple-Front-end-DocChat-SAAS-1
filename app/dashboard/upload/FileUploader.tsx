"use client";

import { Button } from "@/components/ui/button";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FaPlusCircle, FaRocket } from "react-icons/fa";

function FileUploader() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
  }, []);

  const { getRootProps, getInputProps, isDragActive, isFocused } = useDropzone({ onDrop });

  return (
    <div className=" flex-col  gap-4 flex  items-center  bg-white max-w-7xl mx-auto">
      <div
        {...getRootProps()}
        className={` h-96 flex items-center mt-10 w-[90%] cursor-pointer border-dashed border-2 p-10 rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl  max-w-md ${
          isDragActive || isFocused ? "bg-indigo-200" : "border-indigo-500 "
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <div className=" flex-col  gap-4 flex  items-center  max-w-7xl mx-auto">
           <FaRocket className="text-indigo-600 text-xl hover:text-black transition duration-300" />
           <p className="text-xl font-mono text-gray-500"> Drop  here</p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-4 p-4">
             <FaPlusCircle className="animate-bounce text-indigo-600 text-4xl transition duration-" />
             <p className="text-xl font-mono text-gray-500">Drag and drop your files here</p>
            <p className="text-gray-500">or</p>
            <Button className="text-white font-mono bg-red-500 px-4 py-2 rounded-lg">Browse files</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default FileUploader;
