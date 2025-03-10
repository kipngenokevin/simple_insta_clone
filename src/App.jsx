import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Post from './components/Post'
import Stories from './components/Stories'

function App() {
  

  return (
    <>
     <Header />
     <Stories />
     <Post />
    </>
  )
}

export default App
