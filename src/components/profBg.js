import { styled } from '@mui/system';
import { colors } from '../palette';

export const ProfBg = styled('div')(({ theme }) => ({
    "h3": {
        color: theme.palette.mode === "dark" ? "white" : "black",
    },
    '#hideScroll::-webkit-scrollbar': {
        display: "none",
    },
    '#hideScroll': {
        overflow: "scroll",
        height: "736px",
        "#topL": {
            fontSize: "20px",
            color: colors.gray600,
            marginLeft: "20px",
            marginTop: "20px"
        },
        "#topR": {
            fontSize: "20px",
            color: colors.gray600,
            marginLeft: "320px"
        },
        "#avtr": {
            width: "150px",
            height: "150px",
            marginLeft: "113px",
        },
        "#info": {
            textAlign: "center",
            marginTop: "15px",
            "& h3": {
                marginBottom: "5px",
            }
        },
        "#icons": {
            display: "flex",
            width: "150px",
            justifyContent: "space-between",
            marginLeft: "120px",
            marginTop: "30px",
        },
        "#div": {
            textAlign: "center",
            "& i": {
                fontSize: "20px",
                color: colors.gray600,
            }
        },
        "& hr": {
            marginTop: "30px",
            width: "80%",
            marginLeft: "40px"
        },
        "#sepHr": {
            marginTop: "20px",
            width: "80%",
            marginLeft: "40px"
        },
        "#abt": {
            marginLeft: "40px",
            marginTop: "20px",
            "& p": {
                marginTop: "5px"
            }
        },
        "#uniHr": {
            marginTop: "20px",
            width: "80%",
            marginLeft: "40px",
            marginBottom: "20px"
        },
        "#media": {
            display: "flex",
            justifyContent: "space-between",
            width: "345px",
            "& p": {
                fontSize: "13px",
                marginLeft: "40px",
                "& i": {
                    marginLeft: "3px",
                    fontSize: "10px",
                }
            }
        },
        "#files": {
            width: "308px",
            marginLeft: "40px",
            marginTop: "10px",
            overflow: "hidden",
            display: "flex",
            "& img": {
                marginRight: "5px",
                width: "80px",
                height: "80px"
            }
        },
        "#starr": {
            display: "flex",
            marginLeft: "43px",
            marginTop: "20px",
            "& i": {
                fontSize: "20px",
                color: colors.gray600,
            },
            "& p": {
                marginLeft: "15px",
                marginTop: "-2px"
            },
            "#msg": {
                marginLeft: "125px",
                fontSize: "15px",
                color: colors.gray600,
                marginTop: "5px"
            }
        },
        "#mute": {
            display: "flex",
            marginLeft: "45px",
            marginTop: "30px",
            "& i": {
                fontSize: "20px",
                color: colors.gray600,
            },
            "& p": {
                marginLeft: "20px",
                marginTop: "-2px"
            },
            "#muteTog": {
                marginLeft: "100px",
                marginTop: "-10px",
            }
        },
        "#cmn": {
            marginTop: "10px",
            marginLeft: "40px",
            "& p": {
                marginBottom: "10px",
            },

        },
        "#crt": {
            marginTop:"20px",
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            "& i" : {
                backgroundColor: colors.blue600, 
                padding: "12px", 
                fontSize: "18px", 
                borderRadius: "100%", 
                color: "white"
            },
            "& p" : {
                marginLeft: "20px", 
            }
        },
        "#grp" : {
            "#div1" : {
                display: "flex", alignItems: "center", marginBottom: "15px",
                "& img" : {
                    backgroundColor: "orange", borderRadius: "100%",
                    width : "50px",
                    height : "50px"
                },
                "& div" : {
                    marginLeft: "20px" ,
                    "& p" : {
                        marginBottom:"5px"
                    },
                    "#names" : {
                        fontSize: "12px" 
                    }
                },
                
            }
        },
        "#more" : {
            display: "flex", 
            marginLeft: "17px", 
            marginTop: "30px",
            "& i" : {
                color: "gray",
            } ,
            "& p" : {
                marginTop: "-5px", 
                marginLeft: "37px" 
            }
        },
        "#blk" : {
            marginBottom: "20px", 
            fontSize:"16px", 
            display:"flex" , 
            marginLeft: "55px", 
            marginTop:"20px", 
            fontWeight:"bolder",
            "& i" : {
                transform: "rotate(90deg)", 
                color:colors.red600 
            },
            "& p" : {
                color:colors.red600 , 
                marginLeft:"38px"
            } 
        },
        "#rpt" : {
            marginBottom: "25px", 
            fontSize:"16px", 
            display:"flex" , 
            marginLeft: "60px", 
            fontWeight:"bolder",
            "& i" : {
                transform: "scaleX(-1)", 
                color:colors.red600  
            } ,
            "& p" : {
                color:colors.red600, 
                marginTop:"-5px", 
                marginLeft:"34px"
            } 
        }
    },

}));