import React, { createContext, useContext, useState, useEffect, useReducer } from 'react'

const AppContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return {
        players: [...state.players, { id: action.index, Name: action.Name, Avatar: action.image, Bet: action.Bet, Price: action.Price, status: true }],
        total: state.total + 1
      }
    case 'remove':
      return {
        players: state.players.filter((player) => player.id !== action.index),
        total: state.total - 1
      }
    case 'toggle':
      return {
        players: state.players.map((p) => p.id === action.index ? { id: action.index, Name: action.Name, Avatar: action.image, Bet: action.Bet, Price: action.Price, status: !p.status } : p),
        total: state.total
      }
    default:
      return state
  }
}

const AppProvider = ({ children }) => {
  const [lists, setLists] = useState([])
  const [{ players, total }, dispatch] = useReducer(reducer, { players: [], total: 0 })

  const Fetchall = async() => {
    const url = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json'

    const responce = await fetch(url)
    const data = await responce.json();
    if (data) {
      const newRes = data.map((item, index) => {
        const { Price, Name, Bet } = item
        return { id: index, Name: Name, Bet: parseInt(Bet), Price: parseInt(Price), status: false, image: item["Profile Image"] }
      })
      setLists(newRes)
    }
  }


  useEffect(() => {
    Fetchall()
  }, [])
  return (
    <AppContext.Provider value={{
      lists, players, total, dispatch
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }