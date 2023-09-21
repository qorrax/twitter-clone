import React, {useState} from 'react'
import {Col,Card, Button} from 'react-bootstrap'

const  TweetCard = (props) => {

  const { tweet, key } = props

  
  const [likeCount, setLikeCount] = useState(tweet.likecount);
  const [retweetCount, setRetweetCount] = useState(tweet.retweetcount);

  return (
    

    
      <Col xs='3'  key={key}>
      
      <Card style={{margin: "10px"}}>
        <Card.Title>@:{tweet.author}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{tweet.twiteruser}    {tweet.posttime}</Card.Subtitle>
        <Card.Text>
          {tweet.content}
        </Card.Text>
        <Button>{tweet.commentscount} Comments</Button><br/>
        <Button onClick={() =>setRetweetCount(retweetCount + 1) }>{retweetCount} Retweets</Button><br/>
        <Button onClick={() =>setLikeCount(likeCount +1) }>{likeCount} Likes</Button><br/>
        
      </Card>

      


    </Col>
  )
}

export default TweetCard