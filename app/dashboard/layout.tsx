import { ClerkLoaded } from "@clerk/nextjs"
import Header from "@/components/ui/Header"
import DocsUpload from "@/components/ui/DocsUpload"
function dashboardLayout({children}:{

children: React.ReactNode

})

{
  return (
    <ClerkLoaded>
      
      <div>
      <Header />

      {children}
      
   
      
      </div> 


    </ClerkLoaded>
  )
}

export default dashboardLayout