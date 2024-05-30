
import "./contacts.css";
import circle from "../images/circle-dashed.webp";
import { ChatBg } from "./chatBg";
import { colors } from "../palette";
import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Conversation from "./conversation";

function Contact(props) {

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
            <ChatBg>
                <div id="hideScroll">
                    <div id="chat">
                        <div>
                            <p>Chats</p>
                        </div>
                        <div>
                            <i id="circle" class="fa-regular fa-circle"></i>
                        </div>

                    </div>
                    <div id="iconSize">
                        <i id="i1" class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div id="topSearch">
                        <input
                            placeholder="Search"
                            id="searchBar"
                        />
                    </div>
                    <div id="all">
                        
                        <div id="peeps" onClick={()=>props.setStat(true)}>
                            <div>
                                <Stack direction="row" spacing={2}>

                                    <Stack id="Stack" direction="row" spacing={2}>
                                        <Avatar {...stringAvatar('Name K')} src="/static/images/avatar/1.jpg" />
                                    </Stack>
                                </Stack>
                            </div>
                            <div>

                                <div style={{ display: "flex", justifyContent: "space-between", width: "280px" }}>
                                    <h4>Name</h4>
                                    <p style={{ fontSize: "12px" }}>Yesterday</p>
                                </div>
                                <p>You: thnx!</p>
                            </div>

                        </div>
                        
                    </div>

                </div>
            </ChatBg>
        </>
    )
}

export default Contact;