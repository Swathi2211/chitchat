import { styled } from '@mui/system';
import { colors } from '../palette';

export const ChatBg = styled('div')(({ theme }) => ({
    '#chat': {
        '& i': {
            color: theme.palette.mode === 'dark' ? 'white' : '#0388fc',
        },
        
    },
    '& input': {
        width: "260px",
        marginLeft: "27.5px",
        height: "40px",
        borderRadius: "14px",
        border: "none",
        backgroundColor: theme.palette.mode === "dark" ? "grey" : "rgba(217, 235, 247, 1)",
        
    },
    '#iconSize': {
        '#i1': {
            fontSize: "18px",
            color: theme.palette.mode === 'dark' ? 'white' : '#0388fc',
            marginLeft : "40px",
            position : "relative"

        },
        '& p': {
            fontSize: "15px",
            color: theme.palette.mode === "dark" ? "white" : "#0388fc",
        }
    },
    '#searchBar::placeholder': {
        color: theme.palette.mode === "dark" ? "white" : "#0388fc",

    },
    '#searchBar': {
        paddingLeft: "45px",
        paddingRight: "24px",
        outline: "none",
        border: "1px solid transparent",
        fontSize: "15px",
        color: theme.palette.mode === "dark" ? "white" : "#0388fc",
    },
    '#hideScroll::-webkit-scrollbar': {
        display: "none",
    },
    '#hideScroll': {
        overflow: "scroll",
        height: "736px"
    },
    '#peeps': {
        backgroundColor : theme.palette.mode === "dark" ? colors.bluegray800 : "white",
        borderRadius : "15px",
        width: "330px", 
        display: "grid", 
        gridTemplateColumns: "15% 85%", 
        padding: "12px", 
        marginTop: "15px", 
        marginLeft: "14px"
    },
    "& h4" : {
        color : theme.palette.mode === "dark" ? "white" : "black"
    },
    "#all" : {
        marginTop : "40px"
    },
    "#topSearch" : {
        marginTop:"-30px",
    },
    '#peeps:hover' : {
        backgroundColor : theme.palette.mode === "dark" ? colors.gray900 : colors.blue50,
    }


}));