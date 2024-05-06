import React from 'react';
import { Button } from './Style/styled';

const ButtonEl = ({ onClick, text }) => {
    return <Button onClick={onClick}>{text}</Button>;
};

export default ButtonEl;
