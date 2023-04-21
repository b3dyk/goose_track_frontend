import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.div`
   display: flex;
   flex-direction: column;
   background-color: ${props => props.theme.colors.blue};
   height: 812px;
   @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: 1024px;
  }
  @media screen and (min-width: 1440px) {
    height: 770px;
  }
`;

export const LogoImg = styled.img`
   margin: 0 auto;
   padding-top: 232px;
   @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding-top: 321px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 187px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.bxxxl};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.white};
  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.homePageLogo};
  }
`;

export const ButtonList = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ButtonReg = styled(NavLink)`
  text-decoration: none;
  width: 131px;
  height: 46px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.radii.medium};
  border: ${props => props.theme.borders.none};
  margin-right: ${props => props.theme.space[4]}px;
  margin-bottom: 200px;
  margin-top: 32px;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  background-color: ${props => props.theme.colors.blue};
  box-shadow: 0 0 15px rgba(236, 236, 236, 0.5);
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.blue};
    box-shadow: 0 0 15px rgba(236, 236, 236, 0.5);
  }
  @media screen and (min-width: 768px) {
    width: 121px;
    height: 49px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const ButtonLogin = styled(NavLink)`
  text-decoration: none;
  width: 131px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: ${props => props.theme.radii.medium};
  border: ${props => props.theme.borders.none};
  color: ${props => props.theme.colors.blue};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.button};
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
    box-shadow: 0 0 15px rgba(236, 236, 236, 0.5);
  }
  svg {
    margin-left: ${props => props.theme.space[3]}px;
    }
  @media screen and (min-width: 768px) {
    width: 121px;
    height: 49px;
  }
`;

export const HomePageList = styled.li`

`;

