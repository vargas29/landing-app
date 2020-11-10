import React from 'react';
import {
    MainSection,
    WelcomeSection,
    ImgStyle,
    WelcomeHeroContainer,
    WelcomeTextContainer,
    NavBar,
    NavBarli,
    NavBarlia,
    NavBarliLogin,
    NavBarliLeft,
    SecondSection,
    WoloxerContainer,
    WorkWithUsContainer,
    ThirdSection,
    BenefitsItem,
    KnowBotFooter,
    LastSection,
    FooterLogo
} from './Landing.style';
import { ReactComponent as WoloxLogo } from '../../assets/logo_full_color.svg';
import { ReactComponent as Ic_brain } from '../../assets/Ic_brain.svg';
import { ReactComponent as Ic_HomeOffice } from '../../assets/Ic_HomeOffice.svg';
import { ReactComponent as Ic_DrinkSnacks } from '../../assets/Ic_DrinkSnacks.svg';
import { ReactComponent as Ic_Workshops } from '../../assets/Ic_Workshops.svg';
import { ReactComponent as Ic_Hour } from '../../assets/Ic_Hour.svg';
import { ReactComponent as Ic_laptop } from '../../assets/Ic_laptop.svg';
import { Link } from "react-router-dom";


const TicketPage = () => {
    return (
        <>
            <NavBar>
                <NavBarli>
                    <NavBarliLogin><Link to="/Register">login</Link></NavBarliLogin>
                </NavBarli>
                <NavBarli>
                    <NavBarlia>Beneficios</NavBarlia>
                </NavBarli>
                <NavBarli>
                    <NavBarlia>Inicio</NavBarlia>
                </NavBarli>
                <NavBarliLeft>
                    <WoloxLogo style={{ height: "25px" }} />
                </NavBarliLeft>
            </NavBar>
            <MainSection>
                <WelcomeSection>
                    <WelcomeTextContainer>
                        <p>Bienvenido a tu <br />
                            <strong>Entrevista Técnica</strong> en <br />
                            <span style={{ color: "#97CF00", fontWeight: "bolder " }}><strong>Wolox</strong></span>
                        </p>
                    </WelcomeTextContainer>
                    <WelcomeHeroContainer>
                        <ImgStyle alt="timer" src={require('../../assets/Img_Hero/Ic_ilustra_Hero.png')} />
                    </WelcomeHeroContainer>
                </WelcomeSection>
                <SecondSection>
                    <WoloxerContainer>
                        <p>Trabaja para <br />
                            <strong><span style={{ color: "#2AA7DF", fontWeight: "bolder " }}>convertir </span><span style={{ color: "#97CF00", fontWeight: "bolder " }}>ideas</span></strong> en <br />
                        productos</p>
                    </WoloxerContainer>
                    <WorkWithUsContainer>
                        <p>Trabaja para <br />
                            <strong><span style={{ color: "#2AA7DF", fontWeight: "bolder " }}>convertir </span><span style={{ color: "#97CF00", fontWeight: "bolder " }}>ideas</span></strong> en <br />
                        productos</p>
                    </WorkWithUsContainer>
                </SecondSection>
                <p>Entre los beneficios que ofrecemos se encuentran <strong><span style={{ color: "#2AA7DF", fontWeight: "bolder " }}>;) </span></strong></p>
                <ThirdSection>
                    <BenefitsItem>
                        <Ic_Hour />
                        <p>Fexibilidad <br />Horaria</p>
                    </BenefitsItem>
                    <BenefitsItem>
                        <Ic_HomeOffice />
                        <p>Home <br />Office</p>
                    </BenefitsItem>
                    <BenefitsItem>
                        <Ic_Workshops />
                        <p>Capacitacion <br />y Workshops</p>
                    </BenefitsItem>
                    <BenefitsItem>
                        <Ic_DrinkSnacks />
                        <p style={{fontsize: "100%"}}>Snarks,frutas <br />y bebidas gratis</p>
                    </BenefitsItem>
                    <BenefitsItem>
                        <Ic_laptop />
                        <p>Semama<br /> remota</p>
                    </BenefitsItem>
                    <BenefitsItem>
                        <Ic_brain />
                        <p>Trabajar<br /> en ultimas<br /> tecnoligias</p>
                    </BenefitsItem>
                </ThirdSection>
                <LastSection>
                <p>Gracias por <strong>completar el ejercicio</strong> 
                <br/>te invitamosa ver mas informacion <br/></p>
                    <KnowBotFooter >Conoce mas</KnowBotFooter> 
                    
                    <FooterLogo>
                    <WoloxLogo style={{ height: "15px" }} />    
                    </FooterLogo>  
                </LastSection>
            </MainSection>
        </>
    )
}

export default TicketPage;