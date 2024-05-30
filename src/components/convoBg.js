import { styled } from '@mui/system';
import { colors } from '../palette';

export const ConvoBg = styled('div')(({ theme }) => ({

    "#top": {
        display: "flex",
        justifyContent: "space-between",
        padding: "15px",
        paddingLeft: "30px",
        backgroundColor: theme.palette.mode === "dark" ? colors.bluegray900 : "rgb(247, 251, 255)",
        "#info": {
            display: "flex",
            width: "120px",
            justifyContent: "space-between",
            "& p": {
                fontSize: "13px",
            }
        }
    },
    "#icons": {
        width: "300px",
        display: "flex",
        justifyContent: "space-evenly",
        "& i": {
            fontSize: "18px", 
            color: colors.blue600,
            padding:"10px",
            borderRadius : "100%",
        },
        "& i:hover" : {
            backgroundColor : "rgba(202, 202, 202, 0.281)",
            
        },
    },




}));