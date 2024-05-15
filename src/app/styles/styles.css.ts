import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('body, html', {
    margin: 0,
    padding: 0,
});

export const app = style({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});
