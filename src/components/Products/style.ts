import styled from "styled-components";
import color from "../../constants/colors";

export const StyledProductsContainer = styled.ul`
  padding-top: 101px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
  width: 1000px;
  padding-bottom: 50px;
  h5 {
    font-size: 16px;
    font-weight: 600;
    line-height: unset;
    letter-spacing: 0px;
    color: ${color.gray};
  }
`;
