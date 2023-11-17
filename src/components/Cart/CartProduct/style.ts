import styled from "styled-components";
import color from "../../../constants/colors";
import { minWidth } from "../../../constants/media";

export const StyledCartProduct = styled.li`
  @media (max-width: ${minWidth}) {
    width: 250px;
    height: 220px;
    flex-direction: column;
  }
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
  width: unset;
  @media (max-width: ${minWidth}) {
    flex-direction: column;
    width: 100%;
  }
  div {
    @media (max-width: ${minWidth}) {
      height: 100px;
    }
    height: 60px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  p {
    @media (max-width: ${minWidth}) {
      font-size: 16px;
      width: 100%;
      margin-right: unset;
      margin-left: unset;
      display: flex;
      justify-content: center;
    }
    margin-right: -8px;
    margin-left: 7px;
    display: flex;
    align-items: center;
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
export const FlexContainer = styled.div`
  @media (max-width: ${minWidth}) {
    width: 100%;
  }
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const QuantityContainer = styled.div`
  @media (max-width: ${minWidth}) {
    margin-bottom: unset;
  }
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  width: 50px;
  div {
    @media (max-width: ${minWidth}) {
      height: 34px;
      width: 97px;
      font-size: 20px;
      line-height: 24px;
      margin-left: 25px;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 8px;
    font-weight: 400;
    line-height: 10px;
    letter-spacing: 0em;
    width: 50px;
    height: 19px;
    border: 1px solid ${color.lightGray};
    border-radius: 4px;
    button {
      &:disabled {
        cursor: not-allowed;
        &:hover {
          color: ${color.black};
        }
      }
      p {
        @media (max-width: ${minWidth}) {
          font-size: 24px;
          line-height: 30px;
        }
        margin-top: -1px;
      }
      cursor: pointer;
      color: ${color.black};
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
      @media (max-width: ${minWidth}) {
        margin-left: 6px;
        padding-right: 11px;
      }
      border-right: 1px solid ${color.lightGray};
    }
    button:nth-child(3) {
      @media (max-width: ${minWidth}) {
        margin-right: 6px;
        padding-left: 11px;
      }
      border-left: 1px solid ${color.lightGray};
    }
  }
`;
export const Quantity = styled.p`
  @media (max-width: ${minWidth}) {
    display: none;
  }
  margin-bottom: 4px;
  font-size: 5px;
  font-weight: 400;
  line-height: 6px;
  letter-spacing: 0em;
  color: ${color.black};
`;
export const Price = styled.p`
  @media (max-width: ${minWidth}) {
    color: ${color.white};
    background-color: ${color.gray};
    padding: 9.5px;
    border-radius: 6px;
    margin-right: 25px;
  }
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0px;
  color: ${color.black};
`;
export const RemoveFromCartIcon = styled.div`
  @media (max-width: ${minWidth}) {
    top: 13px;
    right: 13px;
    background-color: unset;
  }
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
    @media (max-width: ${minWidth}) {
      font-size: 42px;
      color: ${color.black};
    }
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
