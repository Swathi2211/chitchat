import { styled } from '@mui/system';
import { colors } from '../palette';

export const MainBg = styled('div')(({ theme }) => ({

    '#left': {
        backgroundColor: theme.palette.mode === 'dark' ? colors.gray900 : 'rgba(217, 235, 247, 0.653)',
        padding: '20px',
    },
    '#cont': {
        backgroundColor: theme.palette.mode === 'dark' ? colors.bluegray900 : 'rgba(239, 247, 255, 0.454)',
        borderLeft: theme.palette.mode === 'dark' ? `2px solid ${colors.gray800}` : "2px solid lightgrey",
        borderRight: theme.palette.mode === 'dark' ? `2px solid ${colors.gray800}` : "2px solid lightgrey",
    },
    '& p': {
        color: theme.palette.mode === "dark" ?
            "white" : "black",
    },
    '& h4': {
        color: theme.palette.mode === "dark" ?
            "white" : "black",
    },
    '#convo': {
        backgroundColor: theme.palette.mode === 'dark' ? colors.gray900 : 'rgba(217, 235, 247, 0.653)',
    },
    '#profile' : {
        backgroundColor: theme.palette.mode === 'dark' ? colors.bluegray900 : 'rgba(239, 247, 255, 0.454)',
        borderLeft: theme.palette.mode === 'dark' ? `2px solid ${colors.gray800}` : "2px solid lightgrey",
    }

}));