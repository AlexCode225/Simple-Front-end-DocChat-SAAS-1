import { SignedIn, UserButton } from "@clerk/nextjs";
import { FaCloudUploadAlt } from 'react-icons/fa';
import Link from "next/link";
import { Button } from "./button";
import { FaFileAlt } from "react-icons/fa"; 

function Header() {
  return (
    <header className="bg-indigo-950 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/dashboard" className="text-2xl">
          <span className="text-yellow-400">Doc</span>Chat to <span className="text-indigo-600">PDF</span>
        </Link>

        <SignedIn>
          <div className="flex items-center space-x-2">
            <Button asChild variant="link" className="text-white hidden md:flex">
              <Link href="/dashboard/upgrade">Price</Link>
            </Button>

            <div>
            <Button asChild variant="outline" className="border-indigo-600">
  <Link href="/dashboard/upload" className="flex items-center space-x-2">
  <span className="text-black">Upload</span>
    <FaCloudUploadAlt className="text-indigo-600 text-4xl hover:text-black-500 transition duration-300" />
   
  </Link>
</Button>
            </div>


            {/*user */}
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </header>
  );
}

export default Header;
