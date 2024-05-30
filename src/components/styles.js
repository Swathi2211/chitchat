import { styled } from '@mui/system';

export const EachIcon = styled('div')(({ theme }) => ({
    margin: '5px',
    marginTop: '35px',
    width: '18.8px',
    height: '21px',
    padding: '5px',
    borderRadius: '5px',
    '& i': {
        fontSize: '18px',
        color: theme.palette.mode === 'dark' ? 'white' : '#0388fc',
    },
    '&:hover': {
        backgroundColor: theme.palette.mode === 'dark' ? '#0388fcd8' : '#0388fc',
        '& i': {
            color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.968)' : 'white',
        },
    },
}));