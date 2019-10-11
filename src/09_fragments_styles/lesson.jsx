import React, { Fragment, Component} from 'react';
import PropsTypes from 'prop-types';

const Columns =()=>([
        <td key="1">Hello</td>,
        <td key="2">World</td>
    ])

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
