import React from 'react';
import ReactDOM from 'react-dom';
import MyLoginComponent from './components/MyLoginComponent';

ReactDOM.render(
    <MyLoginComponent { ...window.xprops } />,
    document.getElementById("container")
)