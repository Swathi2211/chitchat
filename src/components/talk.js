import { colors } from "../palette";
import React, { useRef, useEffect } from 'react';
import "./talk.css";

function Talk() {

    const chatContainerRef = useRef(null);

    useEffect(() => {
        // Set the scrollTop to the maximum scroll height
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }, []);

    return (
        <>

            <div>
                <div className="overAll" ref={chatContainerRef}>
                    <p className="chat" style={{ backgroundColor: colors.blue300 }}>Helloo, I am Name jwhsgdhgwdfyehwgsdvyhgjhedbjhegdbhjhsgdbcjdhcjdcjjjjjjjjiiiiiiiiiiiiiiK</p>
                    <span style={{width:"20px", height:"20px", backgroundColor:colors.blue400, marginTop:"-100px"}}></span>
                    
                    <p className="chat" style={{ backgroundColor: colors.blue300 }}>Helloo, I am Name jwhsgdhgwdfyehwgsdvyhgjhedbjhegdbhjhsgdbcjdhcjdcjjjjjjjjiiiiiiiiiiiiiiK</p>
                    <p style={{ backgroundColor: colors.blue300 }} className="chat" >Who are you?</p>
                    <p style={{ backgroundColor: colors.blue300 }} className="chat" >Hey I am recent</p>
                </div>

            </div>

        </>
    )
}

export default Talk;