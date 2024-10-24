import styled from "styled-components";
import Header from "../Component/Header.jsx"
import AboutPage from "../Component/About.jsx";

const Homepage = () => {
    return ( 
        <Home>
            <Header/>
            <AboutPage/>
        </Home>
     );
}
 
export default Homepage;

const Home=styled.div`
    
`