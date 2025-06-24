import {Oswald, Roboto, Playwrite_AU_SA, Lexend} from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ComingSoon from "@/app/components/ComingSoon";

const oswaldSans = Oswald({
    variable: "--font-oswald",
    weight: ['200', '300', '400', '500', '600', '700'],
    subsets: ["latin"],
});

const robotoSans = Roboto({
    variable: "--font-roboto",
    weight: ['300', '400', '500', '600', '700'],
    subsets: ["latin"],
});

const lexendSans = Lexend({
    variable: "--font-lexend",
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ["latin"],
});

const playwriteSans = Playwrite_AU_SA({
    variable: "--font-playwrite",
    weight: ['100', '200', '300', '400'],
    subsets: ["latin"],
});

export const metadata = {
    title: "bengUSA.pro",
    description: "A portfolio website for featuring company named bengUSA.pro",
    icons: {
        icon: '/images/svg/bengusaicon.svg'
    }
};

export default function RootLayout({children}) {
    const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';
    console.log(maintenanceMode);
    return (
        <html lang="en">
            <body className={`${oswaldSans.variable} ${robotoSans.variable} ${playwriteSans.variable} ${lexendSans.variable} antialiased`}>
            {maintenanceMode?<ComingSoon/>:(
                <>
                    <Navbar/>
                    <main>{children}</main>
                    <Footer/>
                </>
            )}
            </body>
        </html>
    );
}
