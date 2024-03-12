import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Gameplay from './components/Gameplay'
import NFSItem from './components/NFSItem'
import Team from './components/Team'
import Advicor from './components/Advicor'
import Partner from './components/Partner'
import Docs from './components/Docs'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=' phone:max-w-[100%] w-[1366px] mx-auto overflow-x-hidden '>
      <Header />
      <About />
      <Gameplay />
      <NFSItem />
      <Team />
      <Advicor />
      <Partner />
      <Docs />
      <Footer />
    </div>
  )
}

export default App