import styled from 'styled-components';
import MontserratBold from '../../assets/Fonts/Montserrat/Montserrat-Bold.ttf';
import MontserratLight from '../../assets/Fonts/Montserrat/Montserrat-Light.ttf';

export const NavBar = styled.ul`
    @font-face {
        font-family: 'MontserratBold';
        src: url(${MontserratBold}) format('truetype');       
    }
    font-family: 'MontserratBold';
    position:  ;
    list-style-type: none;
    margin: 0;
    padding-top: 3%;
    padding-bottom: 0;
    padding-right: 5%;
    padding-left: 10%;
    overflow: hidden;
    width: 77%;    
`;

export const NavBarli = styled.li`
    float: right;
`;

export const NavBarliLeft = styled.li`
    float: left;
`;

export const NavBarlia = styled.a`
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
`;

export const NavBarliLogin = styled.a`
    display: block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    border-radius: 25px;
    border-color: #2AA7DF;
    border-style: solid;
    border-width: 1px;
    color: #2AA7DF;
    width: 150px;
    height: 10px;
    background-color: white;
    padding-top: 5%;
    padding-bottom: 8%;
    font-size: 80%;
`;

export const MainSection = styled.section`
    @font-face {
        font-family: 'MontserratLight';
        src: url(${MontserratLight}) format('truetype');       
    }
    font-family: 'MontserratLight';
    font-size: 250%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: raw;
    flex-wrap: wrap;
    padding:  50px 30px 50px 30px;
    min-height: calc(100vh - 200px);
    background-image: url(${require('../../assets/Backgrounds/Bg_Header.png')});
    background-repeat: no-repeat;
    background-position: center top;
`;

export const WelcomeSection = styled.div`
    display: flex;  
    flex-direction: raw;
    flex-wrap: nowrap;
    width: 65%;
    height: 500px;
    padding:  50px 30px 50px 30px;
    justify-content: center;
    align-items: center;
`;

export const WelcomeHeroContainer = styled.div`    
    padding:  50px 30px 50px 30px;    
    width: 50%;
`;

export const WelcomeTextContainer = styled.div`
    text-align: left;
    padding:  50px 30px 50px 30px;    
    width: 50%;
`;

/* Change position */
export const ImgStyle = styled.img`    

`;

export const SecondSection = styled.div`
    display: flex;  
    flex-direction: raw;
    flex-wrap: nowrap;
    width: 80%;
    height: 400px;
    padding: 0px;
    justify-content: center;
    align-items: center;
    background-color: #F2F5FA;  
`;

export const WoloxerContainer = styled.div`        
    width: 50%;
    height: 100%;
    background-image: url(${require('../../assets/img_woloxer.png')});
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
`;

export const WorkWithUsContainer = styled.div`
    text-align: left;    
    width: 50%;
    text-align: center;
`;

export const ThirdSection = styled.div`
    display: flex;  
    flex-direction: raw;
    flex-wrap: nowrap;
    width: 80%;
    padding: 0px;
    justify-content: space-between;
    align-items: center;
`;

export const BenefitsItem = styled.div`
    text-align: center; 
    align-items: center;   
    font-size: 70%;  
`;

export const KnowBotFooter = styled.a`

    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    border-radius: 25px;
    border-color: #2AA7DF;
    border-style: solid;
    border-width: 1px;
    color: white;
    width: 200px;
    height: 10px;
    background-color: #2AA7DF;
    font-size: 40%;
   
`;
export const LastSection = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 65%;
    height: 500px;
    padding:  50px 30px 50px 30px;
    justify-content: center;
    align-items: center;
`;
export const FooterLogo = styled.div`
    text-align: center; 
    padding-top:35%;
    align-items: center;     
`;
