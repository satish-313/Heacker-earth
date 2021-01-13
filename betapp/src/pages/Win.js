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
      <div>
        firstLine
        {firstLine.map((item) => {
          return(<Card key={item.id}/>)
        })}
      </div>
      <div>
        {randomnumber}
      </div>
      <div>
        secondLine
        {secondLine.map((item) => {
          return(<Card key={item.id}/>)
        })}
      </div>
    </div>
  )
}

export default Win;