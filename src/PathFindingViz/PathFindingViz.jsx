 import React, {Component} from 'react';
 import Node from './Node/Node' 

 export default class PathFindingViz extends Component {
     constructor(props){
         super(props);
         this.state = {
             nodes: []
         }
     }

     componentDidMount(){
         const nodes = [];
         for(let row = 0; row < 20; row++){
             let currentRow = [];
             for (let column = 0; column < 50; column++) {
                currentRow.push([]);
         }
         nodes.push(currentRow);
      }
      this.setState({nodes})
    }

     render(){
         const {nodes} = this.state;
         console.log(nodes)
         return(
             <div className="grid">
                 {nodes.map((row, rowIdx) => {
                    return <div key>
                        {row.map((node, nodeIdx) => <Node></Node>)}
                        </div>
                 })}
             </div>
         )
     }
 }