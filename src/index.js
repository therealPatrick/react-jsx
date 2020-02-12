// import react DOM and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create react component
const App = () => {
    const textButton = { text: 'click me' };
    const labelText = 'Enter name:';
    const style =  {backgroundColor:'blue', color:'white'} ;


    return (<div>
        <label className="label" htmlFor="name">
            {labelText}
        </label>
        <input id="name" type="text"/>
    <button style = { style }>{ textButton.text }</button>
    </div>);
};
// take the react compononent and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));