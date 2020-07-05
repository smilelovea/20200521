  
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';
import './chessboard.css';

function chessboard() {
return (
<div className="container">
    <div className="holder">
        <div className="box" draggable="true" id="1"> </div>
    </div>
<div className="holder"></div>
<div className="holder"></div>
<div className="holder"></div>
</div>
) }




export default chessboard;
