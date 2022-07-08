import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Data from './components/Data'


function App(){
  const dataElements = Data.map(data => {
    return <Card 
                key={data.id}
                {...data}
             />
     })
  return(
    <div className='principal'>
      <Navbar />
      <Hero />
      <section className='cards-list'>
          {dataElements}
      </section>
    </div>
    )
}

export default App