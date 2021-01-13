import React,{createContext, useContext,useState,useEffect,useReducer} from 'react'
import axios from 'axios'

const AppContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return {
        players: [...state.players, { id: action.index, Name: action.Name, Avatar: action.image, Bet: action.Bet, Price: action.Price }],
        total: state.total + 1
      }
    case 'remove':
      return {
        players: state.players.filter((player) => player.id !== action.index),
        total: state.total - 1
      }
    default:
      return state
  }
}

const AppProvider = ({children}) => {
  const [lists, setLists] = useState([])
  const [{ players, total }, dispatch] = useReducer(reducer, { players: [], total: 0 })

  const Fetchall = () => {
    const url = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json'
    axios.get(url)
      .then(res => setLists(res.data))
      .catch(err => console.log(err))
  }


  useEffect(() => {
    Fetchall()
  }, [])
  return(
    <AppContext.Provider value={{
      lists,players,total,dispatch
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext,AppProvider}