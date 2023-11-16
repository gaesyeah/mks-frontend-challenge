import color from "./../../constants/colors";
import styled from "styled-components";

export const CartContainer = styled.aside<{ openCart: boolean }>`
  background-color: ${color.blue};
  display: flex;
  position: fixed;
  top: 0px;
  transition: 300ms ease-out;
  right: ${({ openCart }) => (openCart ? "0" : "-486")}px;
  box-shadow: -5px 0px 6px 0px #00000021;
  width: 486px;
  height: 1024px;
  z-index: 2;
`;
export const CartTitle = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  height: 70px;
  padding: 40px;
  p {
    font-size: 27px;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 0em;
    color: ${color.white};
    width: 200px;
  }
`;
export const CloseCartIcon = styled.div`
  cursor: pointer;
  width: 38px;
  height: 38px;
  background-color: ${color.black};
  border-radius: 100%;
  display: flex;
  align-items: center;
  &:hover {
    opacity: 0.7;
    transition: 1000ms;
  }
  p {
    margin-left: 9.5px;
    font-size: 28px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0px;
    color: ${color.white};
  }
`;
