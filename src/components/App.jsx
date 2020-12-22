import React from 'react';

import Message from './Message.jsx';



const App = (props) => {
    // return <main>Some text2</main>;

    const numbers = ["firsttext", "secondtext"]

   
    const click = event => { 
        numbers.push("newtext")
        console.log(numbers)

     };

    return <main onClick={click}><Message numbers={numbers}/></main>;
};

export default App; 

