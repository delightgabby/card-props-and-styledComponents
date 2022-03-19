import React from "react"
import styled from "styled-components"
import Card from "./Compos/Card"
import Header from "./Compos/Header"
import pix1 from "../src/img/mm1.png"
import pix2 from "../src/img/H90l.gif"
import pix3 from "../src/img/stay-home-pull.gif"
import pix4 from "../src/img/3c12ee969eb18e66969488ad47a44156.gif"

const App = () => {
    return ( 
    <div >
        <Header/>    
         <Container>
        <Wrap1 >
        <Card title = "Supervisor" subtitle = "Monitor activities to identify project roadblock" img={pix1} bordertop="solid green 5px"/ >
        </Wrap1>

        <Wrap2 >
        <Card title = "Team Builder"
        subtitle = "Scan our talent network to create the optimal team for your project" img={pix3} bordertop="solid red 5px"/ >
        <Card title = "Karma" subtitle = "Regularly evaluates our talent to ensure quality" img={pix2}  bordertop="solid blue 5px"/ >
        </Wrap2>

        <Wrap1 >
        <Card title = "Calculator" subtitle = "Uses data from past project to provide better delivery estimates" img={pix4} bordertop="solid purple 5px"/ >
        </Wrap1> 
        </Container>

        </div>



    )
};


export default App;

const Container = styled.div `
width: 100%;
height: 98vh;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
/* flex-direction: row; */
`;

const Wrap1 = styled.div `
width: 30%;
height: 50vh;
/* background-color: green; */
/* border: solid white ; */

`;
const Wrap2 = styled.div `
width: 30%;
height: 90vh;
/* background-color: green; */
/* border: solid white ; */

`;