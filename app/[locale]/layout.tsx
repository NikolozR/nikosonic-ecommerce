import "./globals.css";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { locales } from "../../navigation";
import { ThemeProvider } from "next-themes";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { NextUIProvider } from "@nextui-org/react";
import { NextIntlClientProvider } from "next-intl";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Nikosonic",
  description: "NikoSonic: Elevate your auditory experience with our curated collection of high-quality audio products and accessories.",
};
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: childrenProps<paramsLang>) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <UserProvider>
        <body
          className={
            inter.className + " " + grotesk.variable + " " + poppins.variable
          }
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <NextUIProvider>
              <NextIntlClientProvider messages={messages}>
                {children}
              </NextIntlClientProvider>
            </NextUIProvider>
          </ThemeProvider>
        </body>
      </UserProvider>
    </html>
  );
}
