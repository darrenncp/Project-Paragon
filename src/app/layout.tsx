import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { AuthProvider } from "@/contexts/AuthContext";
import { GamificationProvider } from "@/contexts/GamificationContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import LoadingBar from "@/components/LoadingBar";

export const metadata: Metadata = {
  title: "Project Paragon | The Future of Learning",
  description: "Modern, accessible, and engaging digital learning platform across multiple subjects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <ErrorBoundary>
          <AuthProvider>
            <GamificationProvider>
              <LoadingBar />
              <NavBar />
              {children}
            </GamificationProvider>
          </AuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
