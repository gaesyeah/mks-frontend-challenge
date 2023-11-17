import color from "../../constants/colors";
import styled from "styled-components";
import { minWidth } from "../../constants/media";

export const CartContainer = styled.aside<{ openCart: boolean }>`
  @media (max-width: ${minWidth}) {
    width: 90%;
  }
  background-color: ${color.blue};
  display: flex;
  position: fixed;
  top: 0px;
  transition: 300ms ease-out;
  right: ${({ openCart }) => (openCart ? "0" : "-486")}px;
  box-shadow: -5px 0px 6px 0px #00000021;
  width: 486px;
  height: 100vh;
  z-index: 2;
`;
export const RelativePosition = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
export const CartTitle = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  height: 70px;
  padding: 40px;
  h3 {
    @media (max-width: ${minWidth}) {
      margin-left: unset;
    }
    margin-left: 12px;
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
  margin-right: -22px;
  background-color: ${color.black};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.8;
    transition: 1000ms;
  }
  p {
    margin-bottom: 4px;
    text-align: center;
    font-size: 28px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0px;
    color: ${color.white};
  }
`;
export const CartProductsContainer = styled.div`
  @media (max-width: ${minWidth}) {
    max-height: 57%;
  }
  max-height: 62%;
  overflow-y: auto;
  z-index: 3;
  margin-top: 44px;
  ul {
    @media (max-width: ${minWidth}) {
      width: unset;
    }
    margin-left: 6px;
    padding-top: 6px;
    padding-right: 6px;
    box-sizing: content-box;
    width: 379px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`;
export const PurchaseInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  width: 100%;
  position: absolute;
  bottom: 0;
  div {
    @media (max-width: ${minWidth}) {
      padding: 40px;
    }
    display: flex;
    justify-content: space-between;
    padding: 50px;
    p {
      font-size: 28px;
      font-weight: 700;
      line-height: 15px;
      letter-spacing: 0px;
      color: ${color.white};
    }
  }
  button {
    @media (max-width: ${minWidth}) {
      height: 67px;
    }
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${color.black};
    width: 100%;
    height: 97px;
    &:disabled {
      cursor: not-allowed;
      opacity: 0.8;
    }
    &:hover {
      opacity: 0.8;
      transition: 1000ms;
    }
    p {
      @media (max-width: ${minWidth}) {
        font-size: 20px;
      }
      font-size: 28px;
      font-weight: 700;
      line-height: 15px;
      letter-spacing: 0px;
      color: ${color.white};
    }
  }
`;
