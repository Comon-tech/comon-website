import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Comon",
  description: "Join the Comon server",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-2LBDSNVRW7" />
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="👋 Hey! 👋 Looking for a chill spot to hang out, make friends, and level up your skills? 😎 Comon is the place to be! 🎉 We're a community for everyone, from coding wizards to casual chatters! 💖
👥 Meet awesome people, share crazy ideas, and make new friends!
💻 Geek out about code, games, anime, and everything in between! 🤓
👧 Chat with Activa, our friendly AI buddy! 🥰 She's here for witty banter, deep conversations, and all-around fun! ✨
💬 All are welcome! Bring your unique self and join the fun! ✨
Join Comon today and let's create something amazing... together! 🥰 "
        />
        <meta
          name="keywords"
          content="Comon, community, server, collaboration"
        />
        <meta name="author" content="Comon Team" />
        <meta property="og:title" content="Comon" />
        <meta
          property="og:description"
          content="👋 Hey! 👋 Looking for a chill spot to hang out, make friends, and level up your skills? 😎 Comon is the place to be! 🎉 We're a community for everyone, from coding wizards to casual chatters! 💖
👥 Meet awesome people, share crazy ideas, and make new friends!
💻 Geek out about code, games, anime, and everything in between! 🤓
👧 Chat with Activa, our friendly AI buddy! 🥰 She's here for witty banter, deep conversations, and all-around fun! ✨
💬 All are welcome! Bring your unique self and join the fun! ✨
Join Comon today and let's create something amazing... together! 🥰 "
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.comon.tech" />
        <meta property="og:image" content="https://www.comon.tech/icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Comon" />
        <meta name="twitter:description" content="Join the Comon server" />
        <meta name="twitter:image" content="https://www.comon.tech/icon.png" />
        <link rel="canonical" href="https://www.comon.tech" />
       
        <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ul48eob84o");
</script>
        
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground dark`}>
        
        <Navbar />
        {children}
      </body>
    </html>
  );
}
