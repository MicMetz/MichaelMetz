import Link from 'next/link'



export default function Application() {
   return (
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
   );
}

