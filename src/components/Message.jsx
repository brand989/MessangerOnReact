import React from 'react';

const Message = (props) => {
    const numbers = props.numbers
    const listItems = numbers.map((number) =>
        <li>{number}</li>
    );

    return <ul>{listItems}</ul>

};

export default Message; 