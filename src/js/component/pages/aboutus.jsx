import React from "react";
import { useNavigate } from "react-router-dom";


const AboutUs = () =>{
    const logo ="data:image/png;base64,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";
    const navigate = useNavigate();

    return (
        <>
            <div className="container" id="aboutus">
                <h1 className="my-3 pb-4 text-center" id="title">About us...</h1>
                <h3 className="subtitle"> Europe-fs-pt-10 2023 students</h3>
                <p className="my-5 ms-2" id="aboutText"> We are eight brave Hobbits, who decided to change their lives and enter the world of Web Programming. We are guided by our two marvellous magicians, who help us on our way and fix our erros.</p>
                <div className="row my-3">
                    <div className="col">
                        <ul>
                            <li><strong>🧙🏻‍♂️ Nikhil M. (mentor)</strong></li>
                            <li><strong>🔮 Yamil M. (teacher assistant)</strong></li>
                            <li>🙍🏻‍♂️ Edison </li>
                            <li>🙍🏻‍♂️ Luís M L S. </li>
                            <li>🙍🏻‍♂️ Mohamed T. </li>
                            <li>🙍🏻‍♂️ Rodrigo C. </li>
                            <li>🙍🏻‍♂️ Rui S. </li>
                            <li>🙍🏻‍♂️ Sérgio R. </li>
                            <li>🙍🏻‍♂️ Victor M. </li>
                            <li>🙎🏻‍♀️ Lucy </li>
                        </ul>
                    </div>
                    <div className="col-4 align-self-end">
                        <img src={logo} id="logo"></img>
                    </div>
                </div>            
            </div>
            <div className="container mt-5 text-center">
                    <button className="btn btn-light" onClick={() => navigate("/home")}>Country roads take me home...</button>
            </div>
        </>
    )
}

export default AboutUs