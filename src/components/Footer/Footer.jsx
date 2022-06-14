import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from "./FooterStyles";
import Logo from "../../assets/images/logo.svg";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <SocialLogo to="/">
                    <SocialIcon src={Logo} />
                </SocialLogo>
                <FooterSubHeading>Interested working with us?</FooterSubHeading>
            </FooterSubscription>
            <SocialMedia>
                <SocialMediaWrap>
                    <WebsiteRights>
                        © Copyright 2021, Designify. All Rights Reserved
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                        >
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Youtube"
                        >
                            <FaTwitter />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
};

export default Footer;
