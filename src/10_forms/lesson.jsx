import React, { Fragment} from 'react';
import './style.css'
const style={color:'red',textTransform:'uppercase'}
const Columns =()=>(
    <Fragment>
        <td style={style}>Inline</td>
        <td className="title" >Simple class</td>
    </Fragment>
);

const Table = () =>(
    <table>
        <tbody>
            <tr>
            <Columns/>
            </tr>
        </tbody>
    </table>
);
export default Table;
