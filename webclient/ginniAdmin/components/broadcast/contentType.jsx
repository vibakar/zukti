import React from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

export default class ContentType extends React.Component{
  render(){
    return(
        <Table celled>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Icon color='red' name='image'/>
                <span color='orange'>Image</span>
              </Table.Cell>
              <Table.Cell>
                <Icon color='red' name='video'/>
                <span color='orange'>Video</span>
              </Table.Cell>
              <Table.Cell>
                <Icon color='red' name='paragraph'/>
                <span color='orange'>Text</span>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      );
  }
}
