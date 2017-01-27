import React from 'react';

import axios from 'axios';
import Config from '../../../../config/url';
import GraphVisualization from './graphVisualization';

export default class Graph extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            graph: null
        };
    }
    componentWillMount() {
        let url = Config.url + '/graph';
          axios.get(url).then((response) => {
                      function checkid(a, id) {
                for (var i=0;i< a.length;i++) {
                    if (a[i].id === id) {
                        return i;
                      }
                    }
                return null;
            }
            //  to separate required nodes and links

            var nodes = [];
            var links = [];
            let finalgraphJson = {};
            response.data.results[0].data.forEach(function(r) {
                for (var j=0;j<3;j++) {
                  if ((checkid(nodes, r.meta[0][j].id) === null) && (r.meta[0][j].type === "node")) {
                        nodes.push({id: r.meta[0][j].id,
                            label: r.row[0][j].name,
                            title: r.row[0][j].name
                        });
                    }
                }
            });
            response.data.results[0].data.forEach(function(r) {
                links.push({source: r.meta[0][0].id,
                    target: r.meta[0][2].id,
                    type: r.row[0][1].name
                });
            });
            finalgraphJson = {
                nodes: nodes,
                links: links
            };
            this.setState({graph: finalgraphJson});
        }).catch((error) => {console.log(error);});
    }

    render() {
        const isdata = this.state.graph;
                return (
            <div>
                {(isdata !== null) && (<GraphVisualization data={this.state.graph}/>)}
            </div>
        );
    }
}
