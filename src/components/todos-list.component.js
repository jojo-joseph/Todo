

import React, { Component } from 'react';


export default class TodosList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: null,
        };
      }
    componentDidMount() {
        fetch('http://localhost:5000/api/todo/gettodo')
          .then(response => response.json())
          .then(info => {
            console.log(info.data)
            this.setState({data:JSON.stringify(info.data)})
          })
      }
    render() {
        return (
            <div>
               {[]||this.state.data.map((todo, index) => (
                    <p>Hello, {todo.desc} from {todo.resp}! {todo.priority}</p>
                ))}
                
            </div>
        )
    }
}   