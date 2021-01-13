import React, { useState } from 'react'

import {useGlobalContext} from '../context'

const PlayerList = ({ list }) => {
  const {dispatch} = useGlobalContext()
  const {Name,Bet,Price,image,status} = list
  
  const [checked,setChecked] = useState(false)

  let index = list.id

  const checkme = (s) => {
    let str
 
    if(s){
      // dispatch({ type: 'toggle', i, Name,Bet, Price, image,s})
      setChecked(false)
      str = 'remove'
    }
    else{
      // dispatch({ type: 'toggle', i, Name,Bet, Price, image,s })
      setChecked(true)
      str = 'add'
    }

    return str
  }

  return (
    <tr>
      <td><input type="checkbox" checked={checked} onChange={() => dispatch({ type: checkme(checked), index, Name, Bet, Price, image,status})} /></td>
      <td>{Name}</td>
      <td className="avatar"><img src={image} alt={Name} /></td>
      <td>{Bet}</td>
      <td>{Price}</td>
    </tr>
  )
}
export default PlayerList;