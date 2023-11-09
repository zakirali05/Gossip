import BackButton from "@/components/back-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Register",
  description: "Authentication pages for Gossip web app. Most advanced chatting app on the web.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return <div className="w-screen h-screen flex items-center justify-center relative">
   <BackButton/>
    {children}
    </div>;
}
