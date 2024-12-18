import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Beeline",
  description: "Project management tool",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const isAuthenticated = false;

  if(!isAuthenticated) {
    redirect('/register')
  }

  return (
    <main>
      {children}
    </main>
  );
}
