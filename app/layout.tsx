import type { Metadata } from "next";
import "#/styles/globals.css";
import Header from "#/components/header";
import Footer from "#/components/footer";
import { Atyp, Suisse } from "#/utils/customFonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${Suisse.variable} ${Atyp.variable}`}>
      <body className={` flex min-h-screen flex-col items-center justify-between p-4 bg-green-400`}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
