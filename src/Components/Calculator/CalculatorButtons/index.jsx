import ButtonEl from './Button/index';
import wrapper from '../../../store/configureStore';
import mainSlice from '../../../store/reducers/main';
import { ButtonsWrap } from './Style/styled';

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

const CalculatorButtons = () => {
    return (
        <ButtonsWrap>
            <ButtonEl onClick={reset} text="C" />
            <ButtonEl text="%" disabled />
            <ButtonEl text="()" disabled />
            <ButtonEl onClick={() => onClickButton('/')} text="÷" />
            <ButtonEl onClick={() => onClickButton('7')} text="7" />
            <ButtonEl onClick={() => onClickButton('8')} text="8" />
            <ButtonEl onClick={() => onClickButton('9')} text="9" />
            <ButtonEl onClick={() => onClickButton('*')} text="x" />
            <ButtonEl onClick={() => onClickButton('4')} text="4" />
            <ButtonEl onClick={() => onClickButton('5')} text="5" />
            <ButtonEl onClick={() => onClickButton('6')} text="6" />
            <ButtonEl onClick={() => onClickButton('-')} text="-" />
            <ButtonEl onClick={() => onClickButton('1')} text="1" />
            <ButtonEl onClick={() => onClickButton('2')} text="2" />
            <ButtonEl onClick={() => onClickButton('3')} text="3" />
            <ButtonEl onClick={() => onClickButton('+')} text="+" />
            <ButtonEl text="." disabled />
            <ButtonEl onClick={() => onClickButton('0')} text="0" />
            <ButtonEl onClick={onClickDelete} text="<" />
            <ButtonEl onClick={onClickCalculate} text="=" />
        </ButtonsWrap>
    );
};

export default CalculatorButtons;
