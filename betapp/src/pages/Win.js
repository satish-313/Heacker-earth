import React from 'react'

import {useGlobalContext} from '../context'
import Card from '../components/Card'

const Win = () => {
  const {players} = useGlobalContext()

  const randomnumber = Math.floor(Math.random() * 10)

  const firstLine = players.slice(0,5)
  const secondLine = players.slice(6)

  return(
    <div>
      <div className="parent-card">
        {firstLine.map((item) => {
          return(<Card key={item.id} item={item} number={randomnumber}/>)
        })}
      </div>
      <div className="wining-number">
        <span>{randomnumber}</span>
      </div>
      <div className="parent-card">
        {secondLine.map((item) => {
          return(<Card key={item.id} item={item} number={randomnumber}/>)
        })}
      </div>
    </div>
  )
}

export default Win;