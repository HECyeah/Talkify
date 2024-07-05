import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Link from "next/link";
import { Theme } from '@radix-ui/themes';
import { auth } from '@clerk/nextjs/server'



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Talkifiy",
  description: "A new way to media the social!",
};

export default function RootLayout({ children }) {
  const { userId } = auth()
  console.log(userId)
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className} className=" bg-slate-700">
          <header className="m-1 rounded flex-auto bg-slate-200">
            <h1 className="text-2xl font-bold">💬 Talkify</h1>
            <div className="flex justify-end space-x-4">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <Link href="/">Home</Link>
                <Link href={`/users/user-profile/${userId}`}>Dashbord</Link>
                <UserButton />
              </SignedIn>
            </div>
          </header>
          <main>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider >
  );
}
