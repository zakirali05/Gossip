import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gossip | Chat Page",
  description:
    "Chatting pages for Gossip web app. Most advanced chatting app on the web.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

 
  return <div>{children}</div>;
}
