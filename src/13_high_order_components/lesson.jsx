import React, { Component, Fragment} from 'react';
//import { BrowserRouter as Router, Link } from 'react-router-dom';
import LoadingHOC from './HOC/loadingHoc';

class AppComponentUI extends Component {
    render() {
        return(
            <div>{this.props.data.title}</div>
        );
    }
}

const AppComponent =LoadingHOC('data')(AppComponentUI);

class Lesson extends Component{
    state = {
        data:{},
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response=>response.json())
            .then(data =>this.updateState(data))
    }
    updateState = (data)=>{
        window.setTimeout(()=>{
            this.setState({data})
        },3000)
    }
    render(){

        return(
            <AppComponent data = {this.state.data} />
        );
    }
}


export default Lesson;


