import React, { Component } from "react";
import subSti from "./subaru_wrx_sti.jpg"

class Subie extends Component
{
    render()
    {
        return(
            <div>
                <h1>Subaru WRX STI</h1>
                <img src={subSti} alt="Subaru WRX STI" />
                <p>Model: Subaru WRX STI 2019</p>
            </div>
        )
    }
}

export default Subie;