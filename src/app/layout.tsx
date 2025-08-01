import { ReactNode } from "react";
import "./globals.css";
import { InitialProvider } from "@/providers/initial";

export default function RootLayout({ children, }: Readonly<{ children: ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <InitialProvider>
          {children}
        </InitialProvider>
      </body>
    </html>
  );
}
