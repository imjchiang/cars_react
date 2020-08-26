import React, { Component } from "react";
import evo10 from "./evo_ten.jpg";

class Evo extends Component
{
    render()
    {
        return(
            <div>
                <h1>Mitsubishi Lancer Evo</h1>
                <img src={evo10} alt="Evo 10" />
                <p>Model: Mitsubishi Lancer Evo 10</p>
            </div>
        )
    }
}

export default Evo;