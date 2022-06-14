import { useState, useEffect } from "react";
import { FiMail } from "react-icons/fi";
import {
    HeroSection,
    Heading,
    HeroText,
    ButtonContainer,
    HeroButton,
    ImageCharacter,
    HeroImage,
    HeroContent,
    ButtonWrapper,
    CharacterContainer,
} from "./HeroStyles";
import { useInView } from "react-intersection-observer";
import BgImage from "../../assets/images/hero-pattern-bg.png";
import HeroGuy from "../../assets/images/hero-guy-1.png";
import GuyCharacterOne from "../../assets/images/image 1.png";
import GuyCharacterTwo from "../../assets/images/image 2.png";
import GuyCharacterThree from "../../assets/images/image 3.png";
import Modal from "../Modal/Modal";

const Hero = () => {
    const [showModal, setShowModal] = useState(false);

    const dragConstraints = { top: 0, bottom: 0, right: 0, left: 0 };

    const toggleModal = () => {
        if (!showModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
        setShowModal(!showModal);
    };

    const variant = {
        hover: {
            y: 15,
            transition: {
                yoyo: Infinity,
                duration: 0.6,
            },
        },
    };

    const [ref, inView] = useInView({
        rootMargin: "-100px",
    });

    useEffect(() => {
        console.log(inView);
    }, [inView]);

    return (
        <>
            <HeroSection>
                <HeroImage className="pattern" src={BgImage} />
                <HeroImage className="guy" src={HeroGuy} />
                <CharacterContainer>
                    <ImageCharacter
                        variants={variant}
                        whileHover="hover"
                        drag
                        dragConstraints={dragConstraints}
                        className="one"
                        src={GuyCharacterOne}
                    />
                    <ImageCharacter
                        variants={variant}
                        whileHover="hover"
                        drag
                        dragConstraints={dragConstraints}
                        className="two"
                        src={GuyCharacterTwo}
                    />
                    <ImageCharacter
                        variants={variant}
                        whileHover="hover"
                        drag
                        dragConstraints={dragConstraints}
                        className="three"
                        src={GuyCharacterThree}
                    />
                </CharacterContainer>

                <HeroContent>
                    <Heading>We are Designify</Heading>
                    <HeroText>
                        A team of passionate designer and developers ready to
                        provide unique and outstanding products for you!
                    </HeroText>
                    <ButtonContainer ref={ref}>
                        <ButtonWrapper>
                            <HeroButton
                                onClick={toggleModal}
                                className={inView ? "" : "corner"}
                            >
                                {inView ? (
                                    <>Chat with us</>
                                ) : (
                                    <FiMail color="white" size="2.3rem" />
                                )}
                            </HeroButton>
                        </ButtonWrapper>
                    </ButtonContainer>
                </HeroContent>
            </HeroSection>
            <Modal showModal={showModal} toggleModal={toggleModal} />
        </>
    );
};

export default Hero;
