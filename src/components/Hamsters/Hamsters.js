import React from 'react'
import { HamstersData } from '../../data/HamstersData';
import { Link } from "react-router-dom"
import "./style.css"


export default function Hamsters() {
  return (
    <div className='hamsters-container'>
    <ul className='hamsters-ul'>
     <h1 className='hamsters-title'>Different Hamster Species</h1>
      {Object.entries(HamstersData).map(([id, { breed, description }]) => (
        <li key={id} className="hamsters-li">
        <Link to={`/hamsters/${id}`}>
          <h3>{breed}</h3>
          <p>{description}</p>
        </Link>
        </li>
      ))}
    </ul>
    </div>
  )
}

// export default function Hamsters() {
//   return (
//     <div>
//         <li>Syrian Hamster</li>
//         <li>Robo Hamster</li>
//         <li>Winter White Hamster</li>
//         <li>Campbell Hamster</li>
//     </div>
//   )
// }

