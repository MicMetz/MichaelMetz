import React from "react";
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';
import ThemeManager from "tailwindcss-theming";



const activePage = "home";

export default function Document() {
   return (
     <Html lang="en">
        <Head>
           <title>Michael Metzger</title>
           <meta name="description" content="Michael Metzger's personal website"/>
           <link rel="icon" href="/favicon.ico"/>
           <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
           <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></Script>

           <Script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></Script>
           <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></Script>
        </Head>


        <body className="bg-amber-50" style={{ paddingTop: 0 }}>

           <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ "marginBottom": "4rem" }}>
              <a className="navbar-brand" style={{ fontFamily: "Rubik Iso " }} href="/">Michael Metzger</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                 <ul className="navbar-nav">
                    <li className="nav-item active">
                       <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                       <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                       <a className="nav-link" href="/projects">Projects</a>
                    </li>
                    <li className="nav-item">
                       <a className="nav-link" href="/resume">Resume</a>
                    </li>
                    <li className="nav-item">
                       <a className="nav-link" href="/contact">Contact</a>
                    </li>

                 </ul>
              </div>
           </nav>

           <Main/>
           <NextScript/>
        </body>
     </Html>
   )
}
