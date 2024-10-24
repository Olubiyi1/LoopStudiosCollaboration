import styled from "styled-components";
import Homepage from "./Pages/Homepage";
import AboutPage from "./Component/About";

const App = () => {
    return ( 
        <Main>
            <Homepage/>
            <AboutPage/>
        </Main>
     );
}
 
export default App;

const Main = styled.div`
    
`