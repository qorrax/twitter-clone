

import React from 'react'
import TweetCard from './TweetCard'
import {Row} from 'react-bootstrap'

function TweetList(props) {

  console.log(props)
  return (
    <Row>
      {props.tweets.map((tweet) => (  
        <TweetCard key={tweet.id} tweet={tweet} />
      ))}
  

    </Row>
  )
}

export default TweetList