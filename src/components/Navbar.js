import { Component } from "react";
import { Menuitem } from "./Menuitem";
import { Link } from "react-router-dom"


class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="NavbarItems">
                <div className="container">
                    <div className="NavbarItems__wrapper">
                        <h1 className="NavbarLogo">Ankit</h1>
                        <div className="menu-icons" onClick={this.handleClick}>
                            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                        </div>
                        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                            {Menuitem.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link className={item.cName} to={item.url}> {item.title}</Link>
                                    </li>
                                )
                            }
                            )}
                        </ul>
                        <button className="btn btn-lg navbar__btn">Sign Up</button>
                    </div>

                </div>
            </nav>
        )
    }
}
export default Navbar;