import { Button } from './button';
import wrapper from '../../../app/store/configureStore';
import mainSlice from '../../../app/store/reducers/main';
import { buttonWrap } from './styled.css';

const reset = () => {
    wrapper.dispatch(mainSlice.actions.reset());
};

const onClickButton = value => {
    wrapper.dispatch(mainSlice.actions.addButtonValue(value));
};

const onClickDelete = () => {
    wrapper.dispatch(mainSlice.actions.deleteButtonValue());
};

const onClickCalculate = () => {
    wrapper.dispatch(mainSlice.actions.getResult());
};

export const Buttons = () => {
    return (
        <div className={buttonWrap}>
            <Button onClick={reset} text="C" />
            <Button text="%" disabled />
            <Button text="()" disabled />
            <Button onClick={() => onClickButton('/')} text="÷" />
            <Button onClick={() => onClickButton('7')} text="7" />
            <Button onClick={() => onClickButton('8')} text="8" />
            <Button onClick={() => onClickButton('9')} text="9" />
            <Button onClick={() => onClickButton('*')} text="x" />
            <Button onClick={() => onClickButton('4')} text="4" />
            <Button onClick={() => onClickButton('5')} text="5" />
            <Button onClick={() => onClickButton('6')} text="6" />
            <Button onClick={() => onClickButton('-')} text="-" />
            <Button onClick={() => onClickButton('1')} text="1" />
            <Button onClick={() => onClickButton('2')} text="2" />
            <Button onClick={() => onClickButton('3')} text="3" />
            <Button onClick={() => onClickButton('+')} text="+" />
            <Button text="." disabled />
            <Button onClick={() => onClickButton('0')} text="0" />
            <Button onClick={onClickDelete} text="<" />
            <Button onClick={onClickCalculate} text="=" />
        </div>
    );
};
