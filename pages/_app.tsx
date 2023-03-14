import React from "react";
import 'normalize.css';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";




// @ts-ignore
export default function App( { Component, pageProps } ) {
   return (
     <>
        <Head>
           <title>Michael Metzger</title>
           <meta name="description" content="Michael Metzger's personal website"/>
           <Link rel="icon" href="/favicon.ico"/>
           <Link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" />
           <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" />

           <Script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></Script>
           <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></Script>
        </Head>
        <Component {...pageProps} />
     </>
   )
}


