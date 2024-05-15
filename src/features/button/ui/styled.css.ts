import { style } from '@vanilla-extract/css';

export const button = style({
    height: '68px',
    padding: '20px 0',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    backgroundColor: '#e1e4e5',
    fontSize: '23px',
    boxSizing: 'border-box',
    textAlign: 'center',
});

export const buttonWrap = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 68px)',
    justifyContent: 'center',
    gap: '16px',
});
