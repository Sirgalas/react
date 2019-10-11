import React, { Fragment} from 'react';
import PropsTypes from 'prop-types';

const Columns =()=>(
    <Fragment>
        <td key="1">Hello</td>
        <td key="2">World</td>
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
