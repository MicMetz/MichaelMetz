import React from "react";
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';
import ThemeManager from "tailwindcss-theming";
import Link from "next/link";



const activePage = "home";

export default function Document() {
   return (
     <Html lang="en">
      <Head/>


        <body className="bg-amber-50" style={{ paddingTop: 0 }}>



           <Main/>
           <NextScript/>
        </body>
     </Html>
   )
}
