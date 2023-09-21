import { useState } from 'react'
import Navvigation from './Components/Navbar/Navigation'
import Trending from './Components/Trending/Trending'
import TweetList from './Components/Tweets/TweetList'
import TweetCard from './Components/Tweets/TweetCard'

import { Container, Row, Col } from 'react-bootstrap'


import './App.css'

const mockTweet = [

  {
    id: 1,
    avatar: "https://avatars1.githubusercontent.com/u/530257827?s=400&u=u=f1ffa8eacb854522bc642532161b9b9b9b9b9b9b&v=4",
    author: "John Doe",
    twittteruser: "@elton_lazzarin",
    posttime: "2h",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquet ultricies, nunc sapien aliquam diam", 
    commentscount: 30,
    retweet: true,
    retweetcount: 10,
    like: true,
    likecount: 20,
    
  },

  {
    id: 2,
    avatar: "https://avatars1.githubusercontent.com/u/530257827?s=400&u=u=f1ffa8eacb854522bc642532161b9b9b9b9b9b9b&v=4",
    author: "elon musk",
    twittteruser: "@elonmusk",
    posttime: "1h",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquet ultricies, nunc sapien aliquam diam",
    commentscount: 25,
    retweet: true,
    retweetcount: 8,
    like: true,
    likecount: 15,
    
  },

  {
    id: 3,
    avatar: "https://avatars1.githubusercontent.com/u/530257827?s=400&u=u=f1ffa8eacb854522bc642532161b9b9b9b9b9b9b&v=4",
    author: "mudane qorrax",
    twittteruser: "@mudaneqorrax",
    posttime: "3h",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquet ultricies, nunc sapien aliquam diam",
    retweet: true,
    retweetcount: 5,
    like: true,
    likecount: 5,
    commentscount: 10,
  },


  {
    id: 4,
    avatar: "https://avatars1.githubusercontent.com/u/530257827?s=400&u=u=f1ffa8eacb854522bc642532161b9b9b9b9b9b9b&v=4",
    author: "Duraan Ali",
    twittteruser: "@duraanali",
    posttime: "4h",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquet ultricies, nunc sapien aliquam diam",
    retweet: true,
    retweetcount: 8,
    like: true,
    likecount: 9,
    commentscount: 10,
  },
] 


function App() {

  const [tweets, setTweets] = useState(mockTweet);


 

  return (
    
      <Container className='container' display="flex">
        
        <Navvigation />
        <TweetList  tweets={tweets} />
        <Trending />
      </Container>
      
  
  )
}

export default App
