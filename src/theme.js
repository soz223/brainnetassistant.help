import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: '#1a3a6b',  // BrainNet deep blue
        },
        secondary: {
            main: '#6C63FF',  // BrainNet purple accent
        },

        error: {
            main: red.A400,
        },
    },
});

export default theme;