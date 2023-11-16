import styled from "styled-components";
import color from "../../../constants/colors";

export const StyledProduct = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 218px;
  height: 285px;
  box-shadow: 0px 2px 8px 0px #00000022;
  background-color: ${color.white};
  border-radius: 10px;
  position: relative;
`;
export const ImageContainer = styled.div`
  height: 150px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const ProductInfoContainer = styled.div<{ onCart: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80px;
  button {
    cursor: ${({ onCart }) => (onCart ? "not-allowed" : "pointer")};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: none;
    position: absolute;
    bottom: 0;
    background-color: ${({ onCart }) => (onCart ? color.gray : color.blue)};
    width: 100%;
    height: 32px;
    border-radius: 0px 0px 10px 10px;
    p {
      font-size: 14px;
      font-weight: 600;
      line-height: unset;
      letter-spacing: 0px;
      color: ${color.white};
    }
    &:hover {
      opacity: ${({ onCart }) => (onCart ? "unset" : 0.8)};
      transition: 1000ms;
    }
  }
`;
export const Info = styled.div`
  align-items: unset;
  display: flex;
  justify-content: space-between;
  padding: 8px 12px 8px 12px;
  width: 100%;
  p {
    max-width: 120px;
    min-height: 38px;
    overflow-y: auto;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0px;
    color: ${color.gray};
  }
  div {
    width: auto;
    background-color: ${color.gray};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    height: 26px;
    border-radius: 4px;
    p {
      max-width: auto;
      min-height: auto;
      font-size: 15px;
      font-weight: 700;
      line-height: 15px;
      letter-spacing: 0px;
      color: ${color.white};
    }
  }
`;
export const Description = styled.p`
  max-width: 192px;
  min-height: 25px;
  overflow-y: auto;
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
  letter-spacing: 0px;
  color: ${color.gray};
`;
