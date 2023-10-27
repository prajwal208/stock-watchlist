import React, { useEffect, useState } from 'react'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import WatchList from './Components/WatchList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'

function App() {

  const key = process.env.API

  //get data from the localstorage
  const getWatchlist = () => {
    let list = localStorage.getItem('watchlist')

    if (list) {
      return JSON.parse(localStorage.getItem('watchlist'))
    } else {
      return []
    }
  }

  const [name, setName] = useState([])
  const [search, setSearch] = useState('BA')
  const [watchlist, setWatchlist] = useState(getWatchlist())

  const fetchData = async (search) => {
    const response = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${search}&apikey=${key}`)
    console.log(response.data.bestMatches);
    setName(response.data.bestMatches)
  }

  useEffect(() => {
    fetchData(search)
  }, [])

  const searchfilter = () => {
    if (search === '') {
      alert('Please Enter the name')
    } else {
      fetchData(search)
      setSearch('')
    }
  }

  const addtoWatchlist = (item) => {
    const { '2. name': names, '1. symbol': symbol, '8. currency': currency,
      '9. matchScore': matchScore, '5. marketOpen': marketOpen, '6. marketClose': marketClose } = item;

    const watchlistitems = {
      names,
      symbol,
      currency,
      matchScore,
      marketOpen,
      marketClose
    }

    console.log(watchlistitems);
    setWatchlist([...watchlist, watchlistitems])
  }

  //set data to localstorage
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist))
  }, [watchlist])


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home name={name} searchfilter={searchfilter}
            search={search} setSearch={setSearch} addtoWatchlist={addtoWatchlist} />} />
          <Route path='/watchlist' element={<WatchList watchlist={watchlist}
            setWatchlist={setWatchlist} />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
