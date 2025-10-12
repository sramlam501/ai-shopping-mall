import './globals.css';
import * as React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0D0D0D] text-white">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}


