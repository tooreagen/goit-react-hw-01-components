import styled from "styled-components";

export const ProfileContainer = styled.div`
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 6px 9px 0px #adadad;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

export const Img = styled.img`
    width: 70%;
    border-radius: 50%;
`;

export const Username = styled.p`
    margin-top: 20px;
    font-weight: 700;
    font-size: 28px;
`;

export const Tag = styled.p`
    margin-top: 10px;
    color: #a0a0a0;
`;

export const Location = styled.p`
    margin-top: 10px;
    color: #a0a0a0;
`;

export const StatsList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
    background-color: #e9fff3;
    border-top: 1px solid #e0e0e0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 15px;
    width: calc(100% / 3);

    &:not(:first-child) {
        border-left: 1px solid #e0e0e0;
    }
`;

export const ItemLabel = styled.span`
    color: #a0a0a0;
`;

export const ItemQuantity = styled.span`
    margin-top: 5px;
    font-weight: 700;
`;

