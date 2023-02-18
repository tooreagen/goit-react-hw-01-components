import styled from "styled-components";

export const List = styled.ul`
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 300px;;
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    padding: 10px;
    background-color: #ffffff;
    box-shadow: 0px 6px 9px 0px #adadad;
`;

export const Status = styled.span`
    width: 20px;
    height: 20px;
    display: block;
    background-color: ${props => {return props.color}};
    border-radius: 50px;
`;

export const Name = styled.p`
    font-size: 18px;
    font-weight: 700;
`;