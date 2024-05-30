import logo from "../images/redBirdLogo.png";
import { colors } from "../palette";
import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import "./leftMenu.css";
import Test from "./testing";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from '../components/theme';
import { EachIcon } from "./styles";

function LeftMenu(props) {

    const [checked, setChecked] = useState(true);

    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }


    return (
        <>

            <ThemeProvider theme={props.themeMode === 'light' ? lightTheme : darkTheme}>

                <img src={logo} alt="none" height="40px" style={{ backgroundColor: colors.blue100, borderRadius: "5px" }} />

                <EachIcon>
                    <div>
                        <i className="fa-brands fa-facebook-messenger"></i>
                    </div>
                </EachIcon>

                <EachIcon>
                    <div>
                        <i style={{ fontSize: "17px", marginLeft: "-2px" }} class="fa-solid fa-users"></i>
                    </div>
                </EachIcon>

                <EachIcon>
                    <div>
                        <i style={{ fontSize: "17px" }} class="fa-solid fa-phone"></i>
                    </div>
                </EachIcon>

                <hr style={{ marginTop: "25px" }} />

                <EachIcon>
                    <div>
                    <i style={{ marginLeft: "-1px" }} class="fa-solid fa-gear"></i>
                </div>
                </EachIcon>

                <div id="bottom">
                    <Test colChangeFunc={props.colChangeFunc} />
                    <Stack direction="row" spacing={2}>

                        <Stack id="Stack" direction="row" spacing={2}>
                            <Avatar style={{color:"white"}} {...stringAvatar('Sent K')} src="/static/images/avatar/1.jpg" />
                        </Stack>
                    </Stack>
                </div>

            </ThemeProvider>


        </>
    )
}

export default LeftMenu;