import React, { Component} from 'react';

const LevelThree=({title})=><h1>{title}</h1>
const LevelTwo=({tilte})=><LevelThree title={tilte}/>
const LevelOne=({title})=><LevelTwo tilte={title}/>

class Lesson extends Component{

    render() {
        return(
            <LevelOne title="simple title" />
        )
    }
}


export default Lesson;
