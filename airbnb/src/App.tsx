import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Data from './components/Data'


function App(){
  const dataElements = Data.map(data => {
    return <Card 
            img={data.img} 
            star={data.star}
            rating={data.rating}
            reviewCount={data.reviewCount}
            country={data.country}
            title={data.title}
            price={data.price}
            />
  })
  return(
    <div>
      <Navbar />
      <Hero />
      {dataElements}
      </div>
    )
}

export default App