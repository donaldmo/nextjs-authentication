import { getServerSession } from "next-auth";
import AuthProvider from "../context/AuthProvider"
import Navbar from "../components/Navbar"

import "./globals.css"

export const metadata = {
  title: 'NextAuth Tutorial',
  description: 'NextAuth Tutorial by Donald Motswiri',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          <div style={{ marginTop: '64px' }}>
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}