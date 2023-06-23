import React from "react";
import { useNavigate } from "react-router-dom";
import{useState} from "react";


const Navbar = () => {
    const navigate = useNavigate();
    const [title, setTitle]= useState('Start Bootcamp');
    const [newTitle,setNewTitle]=useState("");

    return(
        <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
            <a className="navbar-brand ps-3" href="#">{title}</a>
            <input 
				type="text" 
				onChange={(e) => setNewTitle(e.target.value)}                 
				value={newTitle}
				onKeyDown={(e) =>{
				if (e.key === 'Enter'){
				    setTitle(newTitle);
				}
				}}
				placeholder="Give us a new title😎">								
			</input>
			<button onClick={()=> dispatch({type:CHANGE_TITLE})}>Send New Title</button>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav pe-3 text-white">
                <li className="nav-item">
                <a className="nav-link" onClick={() => navigate("/home")}>Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" onClick={() => navigate("/about-us")}>About Us</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" onClick={() => navigate("/login")}>Log In</a>
                </li>
            </ul>
            </div>
        </nav>
    )
};

export default Navbar;