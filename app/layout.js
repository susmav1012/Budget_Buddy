import { Inter,Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";



const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Budget Buddy",
  description: "Headache with your budget? Manage using Budget Buddy and save money",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      
      <body className={outfit.className}>
      <Toaster/>
        {children}</body>
    </html>
    </ClerkProvider>
  );
}


