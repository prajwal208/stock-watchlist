import React from 'react'
import './home.css'
import clock from '../images/clock.png'
import anchor from '../images/anchor.png'


export default function Home({ name, searchfilter, search, setSearch, addtoWatchlist }) {

    const addtolist = (item) => {
        addtoWatchlist(item)
        alert('added to watchlist')
    }



    return (
        <>
            <input type='text' placeholder='Search for eg.tata,Ibm' value={search}
                onChange={e => setSearch(e.target.value.toLowerCase())} />
            <button onClick={() => searchfilter()}>Search</button>

            <section>
                <article>
                    <div className='price-list'>
                        {name.length === 0 ? <p className='loading'>Loading...</p> :
                            name.map((list) => {
                                return <div className='price-details'>
                                    <div className='comp-name'>
                                        <h3 className='cname'>{list['2. name'].slice(0, 12)}</h3>
                                        <p className='type'>{list['1. symbol']}</p>
                                        <p className='event'>{list['8. currency']}</p>
                                    </div>

                                    <div className='comp-price'>
                                        <h3 className='prc'>{list['9. matchScore']}</h3>
                                        <p className='per'>{list['5. marketOpen']}</p>
                                        <p className='mar-cls'>{list['6. marketClose']}</p>
                                        <p className='add-btn' onClick={() => addtolist(list)}>+</p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </article>


                <article>
                    <div className='user-section'>
                        <h1 className='welcome-name'>Hi, Trading brains</h1>

                        <div className='equity-section'>
                            <figure>
                                <img src={clock} alt='clock-image' />
                                <p>Equity</p>
                            </figure>

                            <div className='second-section'>
                                <div className='equity-price-section'>
                                    <h1 className='h1-price'>0.5</h1>
                                    <p className='sub-hd'>Margin available</p>
                                </div>

                                <div className='equity-balance-section'>
                                    <h4>Margins used 0</h4>
                                    <h4 className='sub-bal'>Opening balance 0.5</h4>
                                    <p className='vw-btn'>View Statement</p>
                                </div>

                                <div className='commodity-account-section'>
                                    <img src={anchor} alt='cmd-image' className='anchor' />
                                    <p className='desc'>You dont have a commodity account</p>
                                    <button className='act-btn'>Activate</button>
                                </div>
                            </div>

                            <div className='third-section'>
                                <h3 className='h3-hd'>Holdings(5)</h3>

                                <div className='share-section'>
                                    <div className='share-price'>
                                        <h1 className='h1-sh'>10.5</h1>
                                        <p>P&L</p>
                                    </div>

                                    <div className='share-value'>
                                        <p>Current value 87.6</p>
                                        <p className='inv-prc'>Investment 98.1</p>
                                    </div>
                                </div>

                                <div className='bar-chart'>
                                    <div className='bar'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}
