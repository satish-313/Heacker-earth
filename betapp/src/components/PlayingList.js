import React from 'react'

const PlayingList = ({player}) => {
  const {Name,Bet,Price,Avatar} = player
  return(
    <div className="display">
      <div>
        <img src={Avatar} alt={Name}/>
      </div>
      <div>
        <p>{Name}</p>
        <span>Bet :</span><span>{Bet}</span>
      </div>
      <div>
        <p>Price</p>
        <p>{Price}</p>
      </div>
    </div>
  )
}
export default PlayingList;