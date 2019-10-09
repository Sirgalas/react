import React, { Component } from 'react';
import PropsTypes from 'prop-types';


const MyLInk =({text,onClick})=>(
    <a href="/test" onClick={onClick}>{text}</a>
);

MyLInk.propTypes={
    text:PropsTypes.string,
    onClick: PropsTypes.func,
}

MyLInk.defaultProps={
    text:'link',
    onClick: ()=>{},
}

class App extends Component{
    handleClick = (e) =>{
        e.preventDefault();
        console.log('Clicked on link!')
    }
    render(){
        return (
            <MyLInk onClick={this.handleClick}/>
        )
    }
}
export default App
