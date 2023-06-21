import React from "react";

const Navbar = (props) => {

    const {navItems} = props;

    const renderNavItems = () =>{
        
      return navItems.map((item) => {
            return (
                <li className="nav-item">
                    <a className="nav-link text-white" aria-current="page" href="#">{item.label}</a>
                </li>
            )
        })       
}
    
    return(
        <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand active text-white ms-4 text-white fw-bolder" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav position-absolute top-0 end-0 me-5 mt-1">
                        {renderNavItems()}
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;