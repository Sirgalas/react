import React, { Component} from 'react';

const LevelThree=()=><h1></h1>
const LevelTwo=()=><LevelThree/>
const LevelOne=()=><LevelTwo/>

class Lesson extends Component{

    render() {
        return(
            <div>...</div>
        )
    }
}


export default Lesson;
