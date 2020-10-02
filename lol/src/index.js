import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import Chessboard from './chessboard';
import Header from './header';

class Home extends React.Component{
    render(){
        return(
            <div>
            <Header />
            <Chessboard />
            </div>
        )
    }
}


ReactDOM.render(<Home/ >,document.getElementById('root'));