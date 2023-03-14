import React from "react";
import ReactDOM from "react-dom";
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";



export default function Index() {

   function bounceHover( e : any ) {
      e.target.style.transform  = "scale(1.1)";
      e.target.style.transition = "transform 0.2s ease-in-out";
   }


   function bounceHoverOut( e : any ) {
      e.target.style.transform  = "scale(1.0)";
      e.target.style.transition = "transform 0.2s ease-in-out";
   }



   return (
     <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ "marginBottom": "4rem" }}>
           <a className="navbar-brand" style={{ fontFamily: "Rubik Iso " }} href="/">Michael Metzger</a>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                 <li className="nav-item active">
                    <a className="nav-link" href="/">Home</a>
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
        <main className="container">

           <h2>hello.</h2>
           <br/>
           <p>
              My name is Michael Metz. I am a perpetual student. As of right now, I'm studying computer science at the University of Colorado at Boulder (CU Boulder). Before, and not too long ago,
              I
              was studying how groups interact and how human social relationships form as a Sociology and Information Science focused student at multiple New York universities over a few years.
              Next,
              who knows? I'm open to anything, and never satisfied with just sitting idle, I’m always scouring for something.
           </p>
           <br/>
           <p>
              At CU Boulder, I am currently working on what will be my second degree. Or third, if I needed to be pedantic and count my Associates. I'm not sure exactly when I might finally stop
              studying. There is always more to learn; so much that has the potential to capture my interest. I haven't been able to resist that urge to go after something new as yet, and judging
              by
              how things are going, I might never find out how to in the future. But I'm not complaining.
           </p>
           <br/>
           <p>
              I'm a relatively solitary person. I like to work with others, but honestly, if I can get away with it, I like to work alone. At all hours of the day, you can find me in some random
              space, working on something or another. I’m always tinkering, always learning, always trying to improve.
           </p>
           <br/>
           <p>
              For more information about experiences, please see my resume. For more about me, or to see what I'm up to, please see my projects portfolio and archives.
           </p>
        </main>
     </>
   );
}




