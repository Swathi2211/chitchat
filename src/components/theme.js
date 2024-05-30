import { createTheme } from '@mui/material/styles';
import { colors } from '../../src/palette';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#E9E9EA',
            paper: '#FFFFFF',
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#39393D',
            paper: '#2E2E2E',
        },
    },
    components: {
        MuiIcon: {
            styleOverrides: {
                root: {
                    color: colors.white, // Set the appropriate color for icons in dark mode
                },
            },
        },
    }
});

export { lightTheme, darkTheme };
