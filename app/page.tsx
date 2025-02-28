import { Button } from "@/components/ui/button";
import { GlobeIcon, ServerIcon, MonitorCheckIcon, EyeIcon, BrainCogIcon, CloudUploadIcon, ClockIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    name: "Store your PDF documents",
    description: "Keep all your files organized and accessible.",
    icon: GlobeIcon,
  },
  {
    name: "Organize and Manage",
    description: "Easily manage and categorize your documents.",
    icon: EyeIcon,
  },
  {
    name: "Interactive Conversations",
    description: "Engage with your PDFs in a conversational manner.",
    icon: BrainCogIcon,
  },
  {
    name: "Cloud Integration",
    description: "Upload and access your documents from the cloud.",
    icon: CloudUploadIcon,
  },
  {
    name: "Secure and Private",
    description: "Your documents are safe with our advanced security measures.",
    icon: ServerIcon,
  },
 
  {
    name: "Cross Devices",
    description: "Available on most devices.",
    icon: MonitorCheckIcon,
  },
];

export default function Home() {
  return (
    <main className="flex-1 lg:p-5 p-2 overflow-scroll bg-gradient-to-bl from-indigo-300 via-indigo-500 to-indigo-800 shadow-lg">
      {/* first div */}
      <div className="bg-white sm:py-32 py-24 drop-shadow-xl rounded-sm">
        {/* second div */}
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className=" font-semibold text-2xl text-indigo-500">
            <span className=" text-yellow-400">Doc</span><span className=" text-black">Chat, </span>Your interactive PDF friend
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-6xl">
              Enhance your PDFs into great conversations
            </p>
            <p className=" mt-4 text-lg leading-6 text-gray-700">
              Introducing {" "}
              <span className=" text-yellow-400">Doc</span><span className=" text-black">Chat </span> with
              <span className=" text-indigo-600"> PDF </span>
              <br />
              <br />
              Upload your document, and our chatbot will answer questions, summarize content, and answer all questions. Ideal for everyone, <span className="text-indigo-600"> Chat with your Doc </span>{""}
              turns static documents into{" "}
              <span className="font-bold"> dynamic conversations</span>, enhancing productivity 10x fold effortlessly.
            </p>
          </div>

          <Button asChild className="mt-10 mb-5">
            <Link href="/dashboard"> Get started </Link>
          </Button>
        </div>

        {/* other div */}
        <div> 
          <div>
            <Image
              alt="DocChat1"
              src="https://imgur.com/VciRSTI.jpeg"
              width={2432}
              height={1442}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
        </div>

{/*add feathures */}
 




<div className="container mx-auto p-4 sm:p-8 lg:p-12">
  <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
  
    {features.map((feature) => (
      <div className="relative p-4 border rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl">
        <dt className="flex items-center justify-center h-12 w-12 rounded-full bg-black text-white">
          <feature.icon className="h-6 w-6" aria-hidden="true" />
        </dt>
        <dt className="mt-4 text-center">
          <h3 className="text-lg font-medium text-indigo-800">{feature.name}</h3>{/*feature names */}
          <p className="mt-2 text-base text-gray-800">{feature.description}</p>{/*feature description */}
        </dt>
      </div>
    ))}
    
  </dl>
</div>

 {/*end of features */}
 



      </div>
    </main>
  );
}
