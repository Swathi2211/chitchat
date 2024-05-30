import { useState } from "react";
import Contact from "./contacts";
import Conversation from "./conversation";
import LeftMenu from "./leftMenu";
import Profile from "./profile";
import "./main.css";
import { MainBg } from "./mainBg";

function Main(props) {

    const [gridLet, setGridLet] = useState("5% 25% 70%");

    function handleProfile() {
        setGridLet("5% 25% 45% 25%");
    }

    function handleRef() {
        setGridLet("5% 25% 70%");
    }

    const [status, setStat] = useState(false);

    return (
        <>

        
            <MainBg>
                <div id="mainPage" style={{ display: "grid", gridTemplateColumns: gridLet }}>

                    <div id="left">
                        <LeftMenu colChangeFunc={props.colChangeFunc} themeMode={props.themeMode} />
                    </div>

                    <div id="cont">
                        <Contact setStat = {setStat} />
                    </div>

                    <div id="convo">
                        <Conversation info2={handleRef} info={handleProfile} status = {status} />
                    </div>
                    {
                        gridLet === "5% 25% 45% 25%" && (
                            <div id="profile" style={{ gridColumn: '4 / span 1' }}>
                                <Profile info2={handleRef} />
                            </div>
                        )
                    }


                </div>
            </MainBg>
        </>
    )
}

export default Main;