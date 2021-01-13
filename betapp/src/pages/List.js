import React from 'react'
import { FaDice } from 'react-icons/fa'
import {Link } from 'react-router-dom'

// local
import PlayerList from '../components/PlayerList'
import PlayingList from '../components/PlayingList'
import {useGlobalContext} from '../context'

const List = ({}) => {
  const {dispatch,total,players,lists} = useGlobalContext();

  console.log(players)

  return (
    <div className="page-1">
      <div className="player-list">
        <div className="dice-icon">
          <i><FaDice /></i>
          <div></div>
        </div>
        <div className="playes">
          <h6 className="player">playing {total}</h6>
        </div>
        {total === 0 ? "" : players.map((player, index) => {
          return (
            <PlayingList key={index} player={player} />
          )
        })}
        <div className="next-page">
          <Link to="/bet"><button>submit</button></Link>
        </div>
      </div>
      <div>
        <h6 className="player">Select player {total}</h6>
        <table className="table-list">
          <thead>
            <tr>
              <th>SELECT</th>
              <th>PLAYER NAME</th>
              <th>AVATAR</th>
              <th>BET</th>
              <th>PRICE</th>
            </tr>
          </thead>
          <tbody>
            {lists.map((list) => {
              return (<PlayerList key={list.id} list={list} />)
            })}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default List;