


export default function RootLayout({
  children,
  
}: {
  children: React.ReactNode,
  
}) {
  return (
   <main>
    <div className="w-[15rem] h-[15rem] absolute rounded-full bg-red-300 top-[10rem] md:left-[40rem] left-[15rem] z-[-1] blur-[6rem]"></div>
    <div className="w-[15rem] h-[15rem] absolute rounded-full bg-blue-300 top-[6rem] z-[-1] blur-[6rem] md:left-[20rem]"></div>
        {children}
        </main>
       
  )
}
