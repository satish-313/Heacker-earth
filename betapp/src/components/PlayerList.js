import React,{useState} from 'react'

const PlayerList = ({ list,dispatch,index }) => {
  const [checked, setChecked] = useState(false);
  
  const {Name,Bet,Price} = list
  
  const checkme = (checked) => {
    
    let str
    if(checked){
      setChecked(false)
      str = 'remove'
    }
    else{
      setChecked(true)
      str = 'add'
    }

    return str
  }

  return (
    <tr key={index}>
      <td><input type="checkbox" checked={checked} onChange={() => dispatch({ type: checkme(checked), index, Name, Bet, Price, image:list["Profile Image"] })} /></td>
      <td>{Name}</td>
      <td className="avatar"><img src={list["Profile Image"]} alt={Name} /></td>
      <td>{Bet}</td>
      <td>{Price}</td>
    </tr>
  )
}
export default PlayerList;