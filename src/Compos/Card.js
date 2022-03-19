import React from "react"
import styled from "styled-components"





const Card = (props) => {
 return (

    <Container bordertop={props.bordertop}>
        <Wrapper>
            <Title>{props.title}</Title>
            <Content>{props.subtitle}</Content>
            <Icon>
            <img src={props.img} alt =""/>
            </Icon>


        </Wrapper>
    </Container>

    )
};


export default Card;

const Container =styled.div`
width: 90%;
height: 40vh;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
border-top: ${({bordertop})=>bordertop};
margin: 10px;

&:hover {
    border-color: gold;
    background-color: lightyellow;
    cursor: pointer;
  }

  
`;
const Wrapper =styled.div`
width: 80%;
height: 40vh;
/* background-color: white; */
`;

const Title =styled.div`
font-size: 25px;
font-weight: bolder;
/* font-family: aerial; */
margin-bottom: 10px;

`;

const Content =styled.div`
font-size: 15px;
font-weight: 600;
/* font-family: aerial; */
margin-bottom: 105px;
`;

const Icon =styled.div`
width: 100%;
/* background-color: blue; */
display: flex;
justify-content: right;
align-items: center;
img{
    width: 70px;
    /* height: 10vh; */
    border-radius: 10px;
}

`;