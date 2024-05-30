import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { ConvoBg } from "./convoBg";
import { colors } from "../palette";
import redCar from "../images/redCar.webp";
import MuteTog from "./muteTog";
import "./contacts.css";
import { ProfBg } from "./profBg";

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


function Profile(props) {
    return (
        <>

            <ProfBg>
                <div id="hideScroll">
                    <i id="topL" onClick={props.info2} class="fa-solid fa-arrow-left"></i>
                    <i id="topR" class="fa-solid fa-ellipsis-vertical"></i>
                    <div>
                        <Stack direction="row" spacing={2}>

                            <Stack id="Stack" direction="row" spacing={2}>
                                <Avatar id="avtr" {...stringAvatar('Name K')} src="/static/images/avatar/1.jpg" />
                            </Stack>
                        </Stack>
                    </div>

                    <div id="info" >
                        <h3>Name K</h3>
                        <p>+91 99250 78979</p>
                    </div>
                    <div id="icons" >
                        <div id="div" >
                            <i class="fa-solid fa-video"></i>
                            <p>Video</p>
                        </div>
                        <div id="div" >
                            <i class="fa-solid fa-phone"></i>
                            <p>Voice</p>
                        </div>
                    </div>
                    <hr />

                    <div id="abt" >
                        <h4>About</h4>
                        <p>Hi there, I am using</p>
                    </div>

                    <hr id="uniHr" />

                    <div id="media" >
                        <p>Media, links, and docs</p>
                        <p>123<i class="fa-solid fa-chevron-right" ></i></p>
                    </div>
                    <div id="files">
                        <img src={redCar} alt="none"/>
                        <img src={redCar} alt="none"/>
                        <img src={redCar} alt="none"/>
                        <img src={redCar} alt="none"/>
                    </div>

                    <hr />

                    <div id="starr">
                        <i class="fa-solid fa-star"></i>
                        <p>Starred messages</p>
                        <i id="msg" class="fa-solid fa-chevron-right"></i>

                    </div>
                    <div id="mute">
                        <i class="fa-solid fa-bell"></i>
                        <p>Mute notifications</p>
                        <div id="muteTog">
                            <MuteTog />
                        </div>
                    </div>

                    <hr id="sepHr" />

                    <div id="cmn">
                        <p>21 Groups in Common</p>
                        <div id="crt">
                            <i class="fa-solid fa-users"></i>
                            <p >Create group with Name K</p>
                        </div>
                        <div id="grp">
                            <div id="div1">
                                <img src="/1.jpg" />
                                <div>
                                    <p>EVS(Batch 2)</p>
                                    <p id="names">Arti, Bharat, Dinesh, Preetam, +91 6374...</p>
                                </div>
                            </div>
                            <div id="div1">
                                <img src="/1.jpg"/>
                                <div>
                                    <p>Deskmates</p>
                                    <p id="names">Arti, Swasthika, You</p>
                                </div>
                            </div>
                            <div id="div1">
                                <img src="/1.jpg"/>
                                <div>
                                    <p>IWMS proj</p>
                                    <p id="names">Swasthika, You</p>
                                </div>
                            </div>
                            <div id="more">
                                <i class="fa-solid fa-chevron-down"></i>
                                <p>28 more</p>
                            </div>
                        </div>
                    </div>

                    <hr id="sepHr" />

                    <div id="blk">
                        <i class="fa-solid fa-ban"></i>
                        <p>Block Name K</p>
                    </div>
                    <div id="rpt">
                        <i class="fa-solid fa-thumbs-down"></i>
                        <p>Report Name K</p>
                    </div>

                </div>
            </ProfBg>

        </>
    )
}

export default Profile;