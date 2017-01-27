import React from 'react'
import {Table, Grid} from 'semantic-ui-react'

export default class Users extends React.Component {
    render() {
        return (
            <Grid columns={1} style={{
                width: '95%',
                margin: 'auto'
            }}>
                <Grid.Row>
                    <Grid.Column>
                        <Table className='ui very basic striped cell' celled selectable>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Name</Table.HeaderCell>
                                    <Table.HeaderCell>Joining Date</Table.HeaderCell>
                                    <Table.HeaderCell>No Of Queries</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>John</Table.Cell>
                                    <Table.Cell>12 Dec 2016</Table.Cell>
                                    <Table.Cell>231</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Jamie</Table.Cell>
                                    <Table.Cell>04 Jan 2017</Table.Cell>
                                    <Table.Cell>121</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Jill</Table.Cell>
                                    <Table.Cell>12 Dec 2016</Table.Cell>
                                    <Table.Cell>None</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>John</Table.Cell>
                                    <Table.Cell>12 Dec 2016</Table.Cell>
                                    <Table.Cell>231</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Jamie</Table.Cell>
                                    <Table.Cell>04 Jan 2017</Table.Cell>
                                    <Table.Cell>121</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Jill</Table.Cell>
                                    <Table.Cell>12 Dec 2016</Table.Cell>
                                    <Table.Cell>None</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>John</Table.Cell>
                                    <Table.Cell>12 Dec 2016</Table.Cell>
                                    <Table.Cell>231</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Jamie</Table.Cell>
                                    <Table.Cell>04 Jan 2017</Table.Cell>
                                    <Table.Cell>121</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Jill</Table.Cell>
                                    <Table.Cell>12 Dec 2016</Table.Cell>
                                    <Table.Cell>None</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>John</Table.Cell>
                                    <Table.Cell>12 Dec 2016</Table.Cell>
                                    <Table.Cell>231</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Jamie</Table.Cell>
                                    <Table.Cell>04 Jan 2017</Table.Cell>
                                    <Table.Cell>121</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
          )
        }
      }
