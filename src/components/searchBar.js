import React from 'react';
import { colors } from '../palette';

function SearchBar() {
    return (
        <div style={{ marginLeft: "10px", display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: "10px" }}>
                <i style={{ fontSize: "20px", color: colors.gray800 }} className="fa-regular fa-face-grin-wide"></i>
            </div>
            <div style={{ flex: 1 }}>
                <input placeholder="Message" style={{ width: "100%", height: "38px", borderRadius: "20px", border: "none", paddingLeft: "45px", paddingTop: "2px", paddingRight:"35px" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", marginLeft: "10px", left: "20px", width:"70px",  }}>
                <div style={{marginRight:"10px"}}>
                    <i style={{ fontSize: "20px", transform: "rotate(270deg)", color: colors.gray800, marginRight: "10px" }} className="fa-solid fa-paperclip"></i>
                </div>
                <div>
                    <i style={{ fontSize: "20px", color: colors.gray800 }} className="fa-solid fa-camera"></i>
                </div>
            </div>
            <div style={{ marginLeft: "10px", width: "50px", height: "50px", backgroundColor: colors.blue600, textAlign: "center", borderRadius: "50%", marginRight:"5px" }}>
                <i style={{ fontSize: "20px", color: "white", marginTop: "15px" }} className="fa-solid fa-microphone"></i>
            </div>
        </div>
    );
}

export default SearchBar;
