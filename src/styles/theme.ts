import { createTheme } from '@mui/material/styles';

import type { } from '@mui/lab/themeAugmentation';

export const theme = createTheme({
    components: {
        MuiTimeline: {
            styleOverrides: {
                root: {
                    backgroundColor: '#0d1117'
                }
            }
        }
    },
    palette: {
        primary: {
            light: '#161b22',
            main: "#0d1117",
            dark: '#0d1117',
            contrastText: '#ffffff',
        },
        secondary: {
            main: "#7356b5"
        },
    }
});

export const themeColorsParticles = {
    palette: {
        primary: '#0d1117',
        secondary: '#161b22',
        white: '#ffffff'
    }
}