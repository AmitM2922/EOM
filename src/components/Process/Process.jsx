import React from 'react'
import './Process.css'
export default function Process() {
  return (
    <>
    <div className='Process'>
    <table className="table table-hover table-striped table-dark mt-5" style={{ backgroundColor: '#181b3a' }}>
    <thead>
      <tr>
        <th scope="col">Step No</th>
        <th scope="col">Step Name</th>
        <th scope="col">Status</th>
        <th scope="col">Remark</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
    </div>
     
    </>
  )
}
