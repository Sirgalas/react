import React, { Component} from 'react';
import ReactDOM from 'react-dom';

class MyPortal extends Component {
    el = document.createElement('div');
    componentDidMount() {
        document.body.appendChild(this.el);
    }
    componentWillUnmount() {
        document.body.removeChild(this.el);
    }

    render(){
        return ReactDOM.createPortal(this.props.children,this.el)
    }
}
class Lesson extends Component{
    state={
        click:0,
    }

    hadleClick = () =>{
        this.setState(({click})=>({
            click:click+1,
        }))
    }

    render() {
        return(
            <div onClick={this.hadleClick}>
                <span>TEXT</span>
                <p>Clicks: {this.state.click}</p>
                <MyPortal>
                    <div>TEST PORTAL</div>
                    <button>Click</button>
                </MyPortal>
            </div>
        )
    }
}


export default Lesson;
