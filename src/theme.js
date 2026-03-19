import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976D2',  // blue rgb(25, 118, 210)
        },
        secondary: {
            main: '#1976D2',
        },

        error: {
            main: red.A400,
        },
    },
});

export default theme;