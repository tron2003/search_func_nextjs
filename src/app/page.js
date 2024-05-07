'use client'
import { useState, useEffect } from "react"
import Coins from "./component/Coins";
import Search from "./component/search";
export default function Home() { 
 const [coins,setCoins] = useState([])
  useEffect(() => {
    const getCoins = async () => {
      const response = await fetch('/api/coin')
      const coins = await response.json()
      setCoins(coins.data.coins)
    }
    getCoins()
  }, []);
  return (
    <div className="text-center "> <h1 className="font-bold text-6xl mt-14">Search Engine</h1>
      <Search getSearchResults={(results) => 
        setCoins(results)
      } />
      <Coins coins={coins} />
    </div>
  )
}