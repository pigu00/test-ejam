import { useState } from 'react'
import './App.css'

import { Navbar } from './components/Navbar'
import { Steps } from './components/Steps'
import { Card } from './components/Card'
import { TopHeader } from './components/TopHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopHeader></TopHeader>
      <Navbar></Navbar>
      <Steps></Steps>
      <Card></Card>

    </>
  )
}

export default App
