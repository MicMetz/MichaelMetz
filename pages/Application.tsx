import Link from 'next/link'



export default function Application() {
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
        <h1>Software Applications</h1>
        <br/>

        <table className="table table-striped table-hover table-bordered">
           <thead>
              <tr>
                 <th scope="col">Project</th>
                 <th scope="col">Description</th>
                 <th scope="col">Link</th>
              </tr>
           </thead>
           <tbody>
              <tr>
                 <td>Graphical</td>
                 <td>Graphical projects</td>
                 <td></td>
              </tr>
           </tbody>
        </table>
     </main>
      </>
   );
}

