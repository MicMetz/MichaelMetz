import Link from 'next/link'



export default function Projects() {
   return (
     <main className="container">
        <h2>Projects</h2>
        <br/>

        <div className="panel panel-default">
           <div className="panel-heading">
              <h3 className="panel-title">Table of Contents</h3>
           </div>
           <div className="panel-body">
              <ul>
                 <li>
                    <a href="/graphical">Graphical</a>
                 </li>
                 <li>
                    <a href="/application">Web Applications</a>
                 </li>
                 <li>
                    <a href="/gallery">Photo Gallery</a>
                 </li>
              </ul>
           </div>
        </div>
        <br/>
        <br/>

     </main>
   );
}


