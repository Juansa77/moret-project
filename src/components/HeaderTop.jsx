import styled from "styled-components";

const CardContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  height: 120vh;
  justify-content: flex-start:
  align-content:
  background: rgba(0, 0, 0, 0.01);
  color: #fff;
  overflow: hidden;
  position: relative;
  transition: 0.2s ease-in-out;



  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImageWraper = styled.div`
  background-color: black;
  height: 100vh;
  width: 100%;
  background-image: url(${(props) => props.backImg});
  background-color: #ff0034; /* Color concreto que deseas aplicar */
  background-blend-mode: multiply; /* Mezcla el color con la imagen de fondo */
  background-size: cover;
  opacity: 90%;
  filter: drop-shadow(8px 8px 10px gray);
  background-attachment: fixed;

  background-size: cover;
  background-position: 55% 65%;
  clip-path: polygon(51% 0, 100% 0, 100% 94%, 55% 100%, 75% 84%, 0 100%, 0 0);
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Añadido: Centra los elementos horizontalmente */
  justify-content: center;
  bottom: 0;
  left: 0;
  padding: 10px;
  min-width: 100vw;
  min-height: 5vh;
  max-height: min-content;
  margin-bottom: 25vh;
`;

const Title = styled.h1`

  margin-top: 66vh;
  font-size: 7vh;
width:100%;
text-align:right;
margin-right:5vw;
  @media (max-width: 768px) {
    font-size:6.6vw
  }
`;

const Description = styled.h4`
  font-size: 2vh;
  margin-top: -4vh;
  min-width: 100vw;
  width:100%;
text-align:right;
margin-right:5vw;
`;

const Button = styled.button`

border: 1px solid white;
width:10vw;
height:5vh;
background: rgba(0, 0, 0, 0.01);
color: white;
font-size:2vh;
cursor: pointer;
margin-right:5vw;

&:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 20vw;
  }
  

`;

const HeaderTop = ({ title, description, backImg, textButton }) => {
  return (
    <CardContainer>
      <ImageWraper backImg={backImg}>
        <TitleContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Button>{textButton}</Button>
        </TitleContainer>
      </ImageWraper>
    </CardContainer>
  );
};

export default HeaderTop;
