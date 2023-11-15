import styled from "styled-components";
import color from "../../constants/colors";
import { TiShoppingCart } from "react-icons/ti";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 101px;
  background-color: ${color.blue};
  display: flex;
  position: fixed;
  top: 0;
  z-index: 1;
`;
export const LogoContainer = styled.div`
  margin-left: 60px;
  h1{
    font-size: 40px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0px;
    color: ${color.white};
    span{
      font-size: 20px;
      font-weight: 300;
    };
  };
`;
export const CartButtonContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 90px;
  height: 45px;
  border-radius: 8px;
  background-color: ${color.white};
  margin-right: 60px;
  &:hover{
    opacity: 0.9;
    transition: 1000ms;
  }
  p{
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    color: ${color.black};
    margin-right: 15px;
  }
`;
export const CartIcon = styled(TiShoppingCart)`
  color: ${color.black};
  font-size: 22px;
`