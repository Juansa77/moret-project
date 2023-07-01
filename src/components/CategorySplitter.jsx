/* eslint-disable react/prop-types */

import styled from "styled-components";

const CategoryTextContainer = styled.div`
  bottom: 0;
  left: 0;
  min-width: 100vw;
  overflow: hidden;
  height: 6vh;
  display: flex;
  margin-top: 6vh;
  margin-bottom: 5vh;
  text-align: left;
  justify-content: center;
 
`;

const CategoryText = styled.h2`
  font-size: 4.5vh;
  margin: 0;
  width:100%;
  margin-bottom: 2vh;
  margin-left:4vw;
  color: #3e1923;
`;

const CategorySplitter = ({ title }) => {
  return (
    <CategoryTextContainer>
      <CategoryText>{title}</CategoryText>
    </CategoryTextContainer>
  );
};

export default CategorySplitter;
