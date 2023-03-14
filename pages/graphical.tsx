import Link from 'next/link'



export default function Graphical() {
   return (
     <main className="container">
        <h1>Graphical Projects</h1>
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
                 <td>
                    <a href=" https://www.joshuamichaelharris.com/graphical">Graphical</a>
                 </td>
              </tr>
              <tr>

                 <td>Web</td>
                 <td>Web projects</td>
                 <td>
                    <a href=" https://www.joshuamichaelharris.com/web">Web</a>
                 </td>
              </tr>

           </tbody>
        </table>

        <br/>

     </main>
   );
}
