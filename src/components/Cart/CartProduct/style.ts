import styled from "styled-components";
import color from "../../../constants/colors";

export const StyledCartProduct = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 379px;
  height: 95px;
  border-radius: 8px;
  box-shadow: -2px 2px 10px 0px #0000000d;
  background-color: ${color.white};
`;
export const View = styled.div`
  display: flex;
  align-items: center;
  div {
    height: 60px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  p {
    margin-right: -8px;
    display: flex;
    align-items: center;
    margin-left: 7px;
    width: 100px;
    height: 33px;
    overflow-y: auto;
    font-size: 13px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0px;
    color: ${color.gray};
  }
`;
export const QuantityContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  width: 50px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 8px;
    font-weight: 400;
    line-height: 10px;
    letter-spacing: 0em;
    color: ${color.black};
    width: 50px;
    height: 19px;
    border: 1px solid ${color.lightGray};
    border-radius: 4px;
    button {
      p {
        margin-top: -1px;
      }
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 64%;
      border: none;
      background-color: unset;
      &:hover {
        color: ${color.blue};
        transition: 1000ms;
      }
    }
    button:nth-child(1) {
      border-right: 1px solid ${color.lightGray};
    }
    button:nth-child(3) {
      border-left: 1px solid ${color.lightGray};
    }
  }
`;
export const Quantity = styled.p`
  margin-bottom: 4px;
  font-size: 5px;
  font-weight: 400;
  line-height: 6px;
  letter-spacing: 0em;
  color: ${color.black};
`;
export const Price = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0px;
  color: ${color.black};
`;
export const RemoveFromCartIcon = styled.div`
  cursor: pointer;
  position: absolute;
  top: -5px;
  right: -5px;
  width: 18px;
  height: 18px;
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
    margin-bottom: 2px;
    margin-left: 1px;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0px;
    color: ${color.white};
  }
`;
