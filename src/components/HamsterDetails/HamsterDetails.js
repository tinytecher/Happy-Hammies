import React from 'react'
import { useParams } from "react-router-dom"
import { HamstersData } from '../../data/HamstersData';

export default function HamsterDetails() {
    const { id } = useParams();
    console.log(id)
    const hamster = HamstersData[id]
    const { breed, description} = hamster

  return (
    <div>
        <h1>{breed}</h1>
        <p>{description}</p>
    </div>
  )
}
