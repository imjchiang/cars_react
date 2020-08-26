import React, { Component } from "react";
import focus from "./focus_rs.jpg";

class Focus extends Component
{
    render()
    {
        return(
            <div>
                <h1>Ford Focus</h1>
                <img src={focus} alt="Ford Focus" />
                <p>Model: Focus RS 2016</p>
            </div>
        )
    }
}

export default Focus;