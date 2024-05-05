import React from 'react';

const Button = React.memo(({ onClick, text }) => {
    return <button onClick={onClick}>{text}</button>;
});

export default Button;
