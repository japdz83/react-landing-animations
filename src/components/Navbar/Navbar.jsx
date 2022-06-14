import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavLinks,
    NavItem,
} from "./NavbarStyles";
import Logo from "../../assets/images/logo.svg";
import { navbarData } from "../../data/NavBarData";

const Navbar = () => {
    const [show, setShow] = useState(false);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const closeMobileMenu = (id) => {
        scrollTo(id);
        setShow(false);
    };

    return (
        <IconContext.Provider value={{ color: "#fff" }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavIcon src={Logo} alt="Logotipo del sitio" />
                        YouLogo
                    </NavLogo>
                    <MobileIcon onClick={() => setShow(!show)}>
                        {show ? <FaTimes /> : <CgMenuRight />}
                    </MobileIcon>
                    <NavMenu show={show}>
                        {navbarData.map((elem, index) => (
                            <NavItem key={index}>
                                <NavLinks
                                    to="/"
                                    onClick={() => closeMobileMenu(elem.to)}
                                >
                                    {elem.text}
                                </NavLinks>
                            </NavItem>
                        ))}
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    );
};

export default Navbar;
