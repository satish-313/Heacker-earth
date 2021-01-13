import React from 'react'

const Card = ({item,number}) => {
  const {Avatar,Name,Price,Bet} = item
  return(
    <div className={`${number === Bet ? 'card-won' : 'card'}`} >
      <div className="card-first">
        <img src={Avatar} alt={Name}/>
        <span>{Name}</span>
      </div>
      <div className="card-second">
        <h5>Bet : {Bet}</h5>
        <h5>Price : {Price}</h5>
      </div>
    </div>
  )
}

export default Card