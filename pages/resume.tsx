import Link from 'next/link'



export default function Resume() {
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
        <h2>Resume</h2>
        <br/>
        <p>
           coming soon.
        </p>
        <br/>
     </main>
      </>
   );
}
