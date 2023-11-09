import { initialUser } from "@/lib/initialUser";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gossip | Chat Page",
  description:
    "Chatting pages for Gossip web app. Most advanced chatting app on the web.",
};

export default async  function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

 const profile = await initialUser()
  return <div>{children}</div>;
}
