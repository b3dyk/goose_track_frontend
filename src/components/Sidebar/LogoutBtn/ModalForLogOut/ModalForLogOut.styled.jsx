import styled from 'styled-components';

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    /* background-color: ${p => p.theme.colors.backdropBackground}; */
    background-color: rgba(227,243,255, 0.8);
    overflow-y: auto;
`;

export const Inner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    min-width: 360px;
    max-width: 1200px;
    max-height: 90%;
    padding: 40px 28px;
    border-radius: ${props => props.theme.radii.normal};
    /* background-color: ${p => p.theme.colors.modalBackground}; */
    background-color: #fff;
    box-shadow: ${props => props.theme.shadows.modal};
`;

export const CloseBtn = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: transparent;
    color: ${p => p.theme.colors.navBcg};
    border: none;
    outline: none;
    cursor: pointer;
    transition: color 0.25s ease-in-out, transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
        color: #3e85f3;
        transform: scale(1.3);
    }
`;

export const ModalTitle = styled.h3`
    text-align: center;
    margin-bottom: 24px;
    font-family: 'Inter';
    font-weight: ${props => props.theme.fontWeights.semiBold};
    font-size: ${props => props.theme.fontSizes.m};
    line-height: ${props => props.theme.lineHeights.m};
    color: #84828a;

    @media screen and (min-width: 768px) {
        margin-bottom: ${props => props.theme.space[5]}px;
    }
`;

export const ModalList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    list-style: none;
`;

export const ItemBtn = styled.button`
    width: ${props => props.theme.space[8]}px;
    height: ${props => props.theme.space[6]}px;
    padding: ${props => props.theme.space[0]}px;
    border-radius: ${props => props.theme.radii.medium};
    border: ${props => props.theme.borders.none};
    color: #FFFFFF;
    background-color: #3E85F3;
    cursor: pointer;
    font-size: ${props => props.theme.fontSizes.m};
    line-height: ${props => props.theme.lineHeights.xl};
    font-weight: ${props => props.theme.fontWeights.semiBold};
    box-shadow: 0 0 15px rgba(236, 236, 236, 0.5);
    transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out, transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
        color: #3e85f3;
        background-color: gold;
        transform: scale(1.1);
    }

    @media screen and (min-width: 768px) {
        /* width: 141px;
        height: 56px; */
    }
`;