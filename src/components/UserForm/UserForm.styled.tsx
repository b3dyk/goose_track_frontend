import styled from 'styled-components';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface ICellBirhtDayProps {
  birthDay: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: auto;
  margin-right: auto;

  width: 335px;
  height: 653px;

  background: ${p => p.theme.colors.white};
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 854px;
  }
  @media screen and (min-width: 1440px) {
    width: 1087px;
    height: 752px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 4px;
  font-family: 'Inter';
  font-style: normal;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.s};

  color: ${p => p.theme.colors.black2};

  @media screen and (max-width: 767px) {
    margin-top: 59px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const User = styled.p`
  margin-bottom: 40px;
  width: 28px;
  height: 14px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.1667;

  color: ${p => p.theme.colors.grey};

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 18px;
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 1.29px;
  }
`;

export const Forms = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  p {
    margin-bottom: 8px;
  }
  @media screen and (min-width: 768px) {
    width: 354px;
    min-height: 458px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1440px) {
    width: 758px;
    min-height: 264px;
  }
`;

export const Input = styled.input`
  width: 299px;
  height: 42px;

  padding-left: 18px;

  border: ${p => p.theme.borders.userInput};
  border-radius: 8px;
  background-color: ${p => p.theme.colors.white};

  font-family: 'Inter';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.29;

  color: ${p => p.theme.colors.black5};

  @media screen and (min-width: 768px) {
    width: 354px;
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 1.13;
  }
`;

export const DatePick = styled(DatePicker)<ICellBirhtDayProps>`
  width: 299px;
  height: 42px;

  padding-left: 18px;

  border: ${p =>
    (!p.birthDay && '1px solid rgba(17, 17, 17, 0.15)') ||
    (p.birthDay && p.selected === null && '1px solid red') ||
    (p.birthDay && p.selected !== null && '1px solid green')};

  border-radius: 8px;
  background-color: ${p => p.theme.colors.white};

  font-family: 'Inter';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: calc(18 / 14);

  color: ${p => p.theme.colors.black5};

  @media screen and (min-width: 768px) {
    width: 354px;
    height: 46px;

    font-size: ${p => p.theme.fontSizes.m};
    line-height: 1.29;
  }
`;

export const InputFile = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

export const ImgAvatar = styled.img`
  text-align: center;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const IconBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  background-color: ${props => props.theme.colors.blue};
  border-radius: 50%;
  color: ${props => props.theme.colors.white};

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    width: 8px;
    height: 8px;
  }
  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  border: ${p => p.theme.borders.avatar};
  border-radius: 50%;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    position: absolute;
    top: -36px;
    left: 132px;
    background-color: ${props => props.theme.colors.white};
  }

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 14px;

    width: 124px;
    height: 124px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 60px;
    margin-bottom: 20px;
  }
`;

export const LabelImg = styled.label`
  position: absolute;
  left: 188px;
  top: 55px;

  @media screen and (max-width: 767px) {
    left: 177px;
    top: 23px;
  }

  @media screen and (min-width: 768px) {
    left: 200px;
    top: 143px;
  }
  @media screen and (min-width: 1440px) {
    left: 400px;
    top: 167px;
  }
`;

export const LabelBtn = styled.label`
  display: flex;
  flex-direction: column;

  margin-bottom: 18px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.17px;

  color: ${p => p.theme.colors.black2};

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;

    font-size: ${p => p.theme.fontSizes.s};
    line-height: 1.29;
  }
`;

export const Btn = styled.button`
  margin-left: auto;
  margin-right: auto;
  padding: 0;

  &:disabled {
    background-color: rgba(62, 133, 243, 0.5);
  }
  &:disabled:hover {
    background-color: rgba(62, 133, 243, 0.5);
    color: ${p => p.theme.colors.white};
    cursor: not-allowed;
  }
  &:disabled:focus {
    background-color: rgba(62, 133, 243, 0.5);
    color: ${p => p.theme.colors.white};
  }

  width: 195px;
  height: 46px;

  border-radius: 16px;
  border: none;
  cursor: pointer;

  font-family: 'Inter';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.29;

  background-color: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.white};

  :hover,
  :focus {
    background: gold;
    color: ${p => p.theme.colors.blue};
  }

  @media screen and (min-width: 768px) {
    width: 262px;
    height: 48px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 88px;
  }
`;

export const Notification = styled.span`
  position: absolute;
  font-size: 12px;
  left: 20px;
  bottom: -35%;
`;
export const Div = styled.div`
  position: relative;
  @media (max-width: 767px) {
    margin-bottom: 24px;
  }
  @media (min-width: 768px) {
    margin-bottom: 26px;
  }
`;

export const Notifications = styled.span`
  position: absolute;
  font-size: 12px;
  left: 20px;
  bottom: -35%;
`;
