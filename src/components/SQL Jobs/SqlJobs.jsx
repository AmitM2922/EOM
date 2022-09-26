import React, { useState } from 'react'
import useCollapse from 'react-collapsed';

import { BsDashLg, BsPlusLg } from 'react-icons/bs'
import './SqlJobs.css'
export default function SqlJobs() {
    const [isExpanded, setExpanded] = useState(true)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    return (
        <>
            <div className="sqljobs">

                <div className="collapsible"  >
                    <div className="header m-2" {...getToggleProps({
                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                    })}>
                        {isExpanded ? <><BsDashLg style={{ cursor: 'pointer', color: 'white' }} /></> : <><BsPlusLg style={{ cursor: 'pointer', color: 'white' }} /></>}
                        <button className="btn btn-white m-1" disabled style={{ color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
                            Prune
                        </button>
                    </div>


                    <div className="card mt-2" {...getCollapseProps()}>
                        <div className="card-header">
                            Runbook Statementing Steps
                        </div>
                        <div className="card-body">
                            <table className="table table-hover table-striped table-light " >
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
                    </div>
                </div>

            </div>
        </>
    )
}
