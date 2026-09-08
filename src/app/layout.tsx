import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google"; // Inter এর জায়গায় Outfit ইমপোর্ট করুন
import "./globals.css";

// Outfit - Body Text Font (Inter এর জায়গায়)
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit", // CSS ভেরিয়েবলের নাম globals.css এর সাথে মিলিয়ে --font-outfit করা হলো
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// Fraunces - Display/Heading Font
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"], // Hero section-এর italic টেক্সটের জন্য এটি জরুরি
});

export const metadata: Metadata = {
  title: "NexaTrade - Global Trade Partner Since 2006",
  description:
    "Your Business, Every Market. NexaTrade connects US and international businesses with verified buyers across 42+ countries.",

  openGraph: {
    title: "NexaTrade - Global Trade Partner",
    description: "Connecting businesses across borders since 2006.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${fraunces.variable} font-sans bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
