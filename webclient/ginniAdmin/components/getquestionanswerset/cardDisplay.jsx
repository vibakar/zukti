import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

export default class CardDisplay extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(

      <Card.Group >
    <Card>
      <Card.Content>

        <Card.Header>
          {this.props.type}
        </Card.Header>

        <Card.Description>
          {this.props.data}

        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>update</Button>
          <Button basic color='red'>Delete</Button>
        </div>
      </Card.Content>
    </Card>
    </Card.Group>

    )
  }

}
