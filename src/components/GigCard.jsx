/* eslint-disable react/prop-types */
import styled from "styled-components";

const CardContainer = styled.div`
  width: 15vw;
  height: 25vh;
  background-color: #3e1923;
  color: #fff;
  overflow: hidden;
  position: relative;
  transition:  0.2s ease-in-out;
  cursor:pointer;


  @media (max-width: 768px) {
    width: 35vw;
    height:20vh;
    font-size:1px:
  }

  
  &:hover {
 
 
   

    overflow:hidden;
    
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  height:100%;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
`;

const Title = styled.h2`
  font-size: 3.8vh;
  width:100%;
  text-align: left;
  margin: 0;
  line-height:3.5vh;

  margin-top:-1vh;
  margin-left:0.5vw;
  @media (max-width: 768px) {
    font-size:4vw;
    line-height:2vh;
  }

`;

const GigDate = styled.h4`
  font-size: 2vh;
  text-align: left;
  margin: 0;
  margin-left:0.5vw;
  @media (max-width: 768px) {
    font-size:2.3vw;
    line-height:2vh;
  }


`;

const GigPlace = styled.h4`
  font-size: 3vh;
  text-align: left;
  margin: 0;
  margin-bottom: 2vh;
  margin-top:-1vh;
  margin-left:0.5vw;
  @media (max-width: 768px) {
    font-size:2.9vw;
    line-height:2vh;
    margin-top:-0.6vh;
  }

`;

const Button = styled.button`
  border: 1px solid white;
  width: 50%;
  height: 5vh;
  background: rgba(0, 0, 0, 0.01);
  color: white;
  font-size: 2vh;
  cursor: pointer;
  margin-left:3.5vw;
  margin-bottom: 3vh;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 20vw;
    margin-left:6vw;
  }
`;

const GigCard = ({ title, date, place, textButton }) => {
  return (
    <CardContainer>
      <TitleContainer>
        <GigDate>{date}</GigDate>
        <Title>{title}</Title>
        <GigPlace>{place}</GigPlace>
        <Button>{textButton}</Button>
      </TitleContainer>
    </CardContainer>
  );
};

export default GigCard;
