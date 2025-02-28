'use client';

import { PlusCircleIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

function PlaceHolder() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard/upload");
  };

  return (
    <div className="drop-shadow-md flex flex-col items-center rounded-xl cursor-pointer">
      <button
        onClick={handleClick}
        className="flex w-64 h-64 flex-col items-center justify-center
         bg-indigo-200 hover:bg-indigo-400 transition duration-500 ease-in-out border-indigo-200 rounded-lg "
      >
        <PlusCircleIcon className="h-16 w-16 text-white" />
        <span className="mt-2 text-lg text-white"> Add Document </span>
      </button>
    </div>
  );
}

export default PlaceHolder;
