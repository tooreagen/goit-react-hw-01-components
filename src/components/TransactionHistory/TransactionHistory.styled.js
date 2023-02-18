import styled from "styled-components";

export const TransactionTable = styled.table`
    margin-top: 20px;
    width: 100%;
    box-shadow: 0px 6px 9px 0px #adadad;
    border-collapse: collapse;
`;

export const TableHeadCell = styled.th`
    padding: 10px 0;
    background-color: #3284cd;
`;

export const TableRow = styled.tr`
    &:nth-child(2n+1) {
        background-color: #ffffff;
    }
`;

export const TableData = styled.td`
    padding: 10px 0;
    text-align: center;
    border: 1px solid #e0e0e0
`;