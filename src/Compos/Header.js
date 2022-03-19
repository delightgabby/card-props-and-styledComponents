import React from "react"
import styled from "styled-components"


const Header = () => {
 return (

  
             <Head>
                 <Text1>Reliable, efficient delivery </Text1>
                 <Text2>Powered by Technology </Text2>
                 <text3>Our Artificial intelligence powered  tools use millions of projects data </text3>
                 <text4> points to ensure that your project is successful</text4>
                 </Head>
     
    )
};

 export default Header;

const Head = styled.div `
width: 100%;
height: 20vh;
background-color: #f0fff4;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column ;

`;

const Text1 = styled.div `
font-size: 25px;
/* font-weight: bolder; */

`;

const Text2 = styled.div `
font-size: 25px;
font-weight: bolder;

`;