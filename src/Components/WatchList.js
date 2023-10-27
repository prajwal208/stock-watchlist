import React from 'react'
import './watchlist.css'
import graph from '../images/graph1.jpg'

export default function WatchList({ watchlist, setWatchlist }) {

  const deletewatchlist = (remvItem) => {
    const updatedwatchlist = watchlist.filter((item) => item !== remvItem)
    setWatchlist(updatedwatchlist)
  }


  return (
    <>
      <h2 className='wtlist-h2'>WatchList</h2>

      <section>
        <article>
          <div className='price-list'>
            {watchlist.length === 0 ? <p className='loading' id='wt-lst'>WatchList is Empty</p> :
              watchlist.map((list) => {
                return <div className='price-details'>
                  <div className='comp-name'>
                    <h3 className='cname-wl'>{list.names}</h3>
                    <p className='type'>{list.symbol}</p>
                    <p className='event'>{list.currency}</p>
                  </div>

                  <div className='comp-price'>
                    <h3 className='prc'>{list.matchScore}</h3>
                    <p className='per'>{list.marketOpen}</p>
                    <p>{list.marketClose}</p>
                    <p className='cls-btn' onClick={() => deletewatchlist(list)}>-</p>
                  </div>
                </div>
              })
            }
          </div>
        </article>

        <article>
          <img src={graph} alt='graph-img' className='graph'/>
        </article>
      </section>

    </>
  )
}
