import styled from "styled-components";

export const StatisticsSection = styled.section`
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    box-shadow: 0px 6px 9px 0px #adadad;
`;

export const Title = styled.h2`
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: center;
    text-transform: uppercase;
    color: #9d9d9d;
    background-color: #ffffff;
`;

export const StatList = styled.ul`
    display: flex;
`;

export const StatItem = styled.li`
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    width: calc(100% / 5);
    background-color: ${props => {return props.bgColor}};
`;

export const ItemLabel = styled.span`
    font-size: 12px;
    text-align: center;
`;

export const ItemPercentage = styled.span`
    margin-top: 5px;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
`;