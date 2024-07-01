import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Banner from '../../Components/Banner/Banner'
import RowList from '../../Components/Rows/RowLists/RowList'

function Home() {
  return (
    <div>
      <div>
        <Header/>
        <Banner/>
        <RowList/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default Home
