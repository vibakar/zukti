import React from 'react';

export default class GraphVisualization extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        var graphdata = this.props.data;
        const width = 400,
            height = 330;
        const style = {
            width,
            height,
            border: '1px solid #323232'
        };
        console.log("hi");
        console.log(graphdata);



        const force = d3.layout.force().charge(-120).linkDistance(50).size([width, height]).nodes(graphdata.nodes).links(graphdata.links);

        const svg = d3.select(this.refs.mountPoint).append('svg').attr('width', width).attr('height', height);

        const link = svg.selectAll('line').data(graphdata.links).enter().append('line').style('stroke', '#999999').style('stroke-opacity', 0.6).style('stroke-width', 1.5)

        link.append("title").text(function(d) {
            return d.type;
        });
        const color = d3.scale.category20();
        const node = svg.selectAll('circle')
        .data(graphdata.nodes)
        .enter()
        .append("g")
        .append('circle')
        .attr('r', 10)
        .attr("class","node")
        .style('stroke', '#FFFFFF')
        .style('stroke-width', 1.5)
        .style('fill', (d) => color(d.label))
        .call(force.drag);

        node.append("text")
          .attr("dx", 12)
          .attr("dy", ".35em")
          .text(function(d) { return d.title });

        node.append("title").text(function(d) {
            return d.title;
        });



        force.on('tick', () => {
            link.attr('x1', (d) => d.source.x).attr('y1', (d) => d.source.y).attr('x2', (d) => d.target.x).attr('y2', (d) => d.target.y);

            node.attr('cx', (d) => d.x).attr('cy', (d) => d.y);
        });
        force.start();
    }

    render() {
        var data1 = this.props.data;

        const width = 400,
            height = 330;
        const style = {
            width,
            height,
            border: '1px solid #323232'
        };

        // console.log(data1);
        //
        //
        // var data = {
        //     "nodes": [
        //         {
        //             "id": 0,
        //             "label": "react",
        //             "title": "react"
        //         }, {
        //             "id": 1,
        //             "label": "component",
        //             "title": "component"
        //         }, {
        //             "id": 3,
        //             "label": "props",
        //             "title": "props"
        //         }, {
        //             "id": 2,
        //             "label": "state",
        //             "title": "state"
        //         }
        //     ],
        //     "links": [
        //         {
        //             "source": 0,
        //             "target": 1,
        //             "type": "has"
        //         }, {
        //             "source": 1,
        //             "target": 3,
        //             "type": "consists"
        //         }, {
        //             "source": 1,
        //             "target": 2,
        //             "type": "consists"
        //         }
        //     ]
        // };
        //
        //
        //   const force = d3.layout.force().charge(-120).linkDistance(50).size([width, height]).nodes(data.nodes).links(data.links);
        //
        //   const svg = d3.select(this.refs.mountPoint).append('svg').attr('width', width).attr('height', height);
        //
        //   const link = svg.selectAll('line').data(data.links).enter().append('line').style('stroke', '#999999').style('stroke-opacity', 0.6).style('stroke-width', 1.5)
        //
        //   link.append("title").text(function(d) {
        //       return d.type;
        //   });
        //   const color = d3.scale.category20();
        //   const node = svg.selectAll('circle').data(data.nodes).enter().append('circle').attr('r', 5).style('stroke', '#FFFFFF').style('stroke-width', 1.5).style('fill', (d) => color(d.label)).call(force.drag);
        //
        //   node.append("title").text(function(d) {
        //       return d.title;
        //   });
        //
        //   force.on('tick', () => {
        //       link.attr('x1', (d) => d.source.x).attr('y1', (d) => d.source.y).attr('x2', (d) => d.target.x).attr('y2', (d) => d.target.y);
        //
        //       node.attr('cx', (d) => d.x).attr('cy', (d) => d.y);
        //   });
        //   force.start();

        return <div style={style} ref="mountPoint"/>

    }
}
