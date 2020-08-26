import React, { Component } from "react";
import evo9 from "./evo_nine.jpg";

class Evo extends Component
{
    render()
    {
        return(
            <div>
                <h1>Mitsubishi Evo</h1>
                <img src={evo9} alt="Evo 9 photo" />
                <p>Model: Evo 9</p>
            </div>
        )
    }
}

export default Evo;