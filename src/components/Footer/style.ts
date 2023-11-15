import styled from "styled-components";
import color from "../../constants/colors";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  height: 34px;
  margin-top: 34px;
  width: 100%;
  background-color: #EEEEEE;
  p{
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    color: ${color.black};
  }
`;