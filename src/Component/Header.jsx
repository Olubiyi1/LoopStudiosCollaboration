import styled from "styled-components"
import HeroImg from "../assets/Images/image-hero.jpg"
import Logo from "../assets/Images/logo.svg"
import { BrowserRouter,Routes,Route } from "react-router-dom"

const Head = ()=>{
    return(
        <Header>
            <br />
            <br />
    
                <Nav>
                    <img id="Logo" src={Logo} alt="Logo"/>
                        <Links>
                            <p>About</p>
                            <p>Careers</p>
                            <p>Events</p>
                            <p>Products</p>
                            <p>Support</p>
                        </Links>

                </Nav>
          
            <h1>IMMERSIVE EXPERIENCES <br /> THAT DELIVER</h1>
        </Header>
    )
}
export default Head;

const Header=styled.div`
background-image: url(${HeroImg});
height: 100vh;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-attachment: scroll;

h1{
    color: white;
    margin-top: 150px;
    border: 1.5px solid white;
    width: 300px;
    text-align: left;
    margin-left: 50px;
    padding: 10px;
    line-height: 40px;

    @media (max-width:715px ){
        margin: 100px auto;
        font-size: 50px;
        line-height: 60px;
        width: 400px;
    }
}
`
const Nav=styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-items: center;
    
    @media (max-width:715px ){
       border: 2px solid white;
        
    }
        
    }

    #Logo{
        margin-left: 50px;

        @media (max-width:715px ){
        margin: 0px;
        margin-left:100px;
        
    }
    }

    @media (max-width:715px ){
        flex-direction: column;
    }
    
`
const Links=styled.nav`
    display: flex;
    color: white;
    width: 400px;
    justify-content: space-between;
    margin-right: 50px;
    padding: 10px;

    @media (max-width:715px ){
        display: none;
    }
`