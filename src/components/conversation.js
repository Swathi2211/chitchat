import wait from "../images/error.png";
import { colors } from "../palette";

import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { ConvoBg } from "./convoBg";
import SearchBar from "./searchBar";
import Talk from "./talk";

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




function Conversation(props) {

    const [toggle, setToggle] = useState(true);

    function handleClick() {
        if (toggle) {
            props.info();
        } else {
            props.info2();
        }
        setToggle((prev) => !prev);
    }

    return (
        <>

            <ConvoBg>
                {
                    props.status ? (
                        <div>

                            <div id="top">
                                <div id="info" onClick={handleClick}>
                                    <div>
                                        <Stack direction="row" spacing={2}>

                                            <Stack id="Stack" direction="row" spacing={2}>
                                                <Avatar {...stringAvatar('Name K')} src="/static/images/avatar/1.jpg" />
                                            </Stack>
                                        </Stack>
                                    </div>
                                    <div>
                                        <h4>Name K</h4>
                                        <p >Online</p>
                                    </div>
                                </div>
                                <div id="icons">
                                    <i class="fa-solid fa-video"></i>
                                    <i class="fa-solid fa-phone"></i>
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <hr />
                                    <i class="fa-solid fa-chevron-down"></i>
                                </div>
                            </div>

                            <div>
                                <Talk />
                            </div>

                            <div>
                                <SearchBar />
                            </div>

                            

                            {/* <div style={{ height: "200px", width: "200px", overflow: "scroll" }}>
                                <p>oremnm dsjkfhyr uyruhgs hhawuhrgfjhsnbdf haeurfguhjrgfd hjarhsufdagerfsd hearjsdfgr fjyreiufw fuiywhuiefh hfuikjsgf efhiukmgabrsf uhwfjsdf uhawfjhwdf jkhasfjdmhw4u</p>
                            </div> */}


                        </div>
                    ) : (
                        <div style={{ marginLeft: "450px", marginTop: "250px" }}>
                            <img width="200px" src={wait} alt="waiting" />
                            <p style={{ marginLeft: "-35px", color: colors.blue600, marginTop: "20px" }}>Select a conversation or start a new one</p>
                        </div>
                    )
                }
            </ConvoBg>


        </>
    )
}

export default Conversation;