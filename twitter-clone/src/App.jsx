import { useState } from 'react'
import Navvigation from './Components/Navbar/Navigation'
import Trending from './Components/Trending/Trending'
import TweetList from './Components/Tweets/TweetList'
import TweetCard from './Components/Tweets/TweetCard'


import './App.css'

function App() {
 

  return (
    <>
      <div>
        
        <Navvigation />
        <Trending />
        {/* <TweetList />
        <TweetCard /> */}
      </div>
      
    </>
  )
}

export default App
