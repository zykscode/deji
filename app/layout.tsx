import '#/styles/globals.css';

import Footer from '#/components/footer';
import Header from '#/components/header';
import { homepageNavs } from '#/config/homepage';
import { Atyp, Suisse } from '#/utils/customFonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${Suisse.variable} ${Atyp.variable}`}>
      <body
        className={` flex min-h-screen flex-col items-center justify-between bg-green-400`}
      >
        <Header items={homepageNavs.mainNav} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
