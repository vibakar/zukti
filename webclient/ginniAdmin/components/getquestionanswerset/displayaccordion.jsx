import React from 'react'
import {Accordion, Icon, Button, Segment} from 'semantic-ui-react'
import Embedly from 'react-embedly';
import CardDisplay from './cardDisplay'
import {Scrollbars} from 'react-custom-scrollbars';

export default class Display extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            texts: [],
            videos: [],
            blogs: []
        }
    }

    componentDidMount() {
        let texts = this.props.answers.texts.map((data) => {
            this.state.texts.push(<CardDisplay data ={data} type='text'/>)
        });
        this.setState({texts: this.state.texts});

        let videos = this.props.answers.videos.map((data) => {
            this.state.videos.push( <Embedly url={data} apiKey="73f538bb83f94560a044bc6f0f33c5f6"/>)
        });
        this.setState({videos: this.state.videos});

        let blogs = this.props.answers.blogs.map((data) => {
            this.state.blogs.push(<Embedly url={data} apiKey="73f538bb83f94560a044bc6f0f33c5f6"/>)
        });
        this.setState({blogs: this.state.blogs});

    }

    render() {
        return (
            <div>
              <Segment style={{width:900,marginLeft:'10%'}}>
                <Accordion exclusive={true}  styled style={{
                    marginLeft: '0%',
                    width:'100%'

                }}>
                    <Accordion.Title >
                        <Icon name='dropdown'/> {this.props.questions}
                    </Accordion.Title>
                    <Accordion.Content>
                      <h3 style={{color: 'green'}}>TEXTS</h3> {this.state.texts}
                      <h3 style={{color: 'blue'}}>BLOGS</h3> {this.state.blogs}
                      <h3 style={{color: 'red'}}>VIDEOS</h3> {this.state.videos}
                    </Accordion.Content>
                </Accordion>
              </Segment>
            </div>
        )
    }
}