import styled from "styled-components";

export const Container = styled.div`
        border-bottom: 1px solid #555;
        margin-bottom: 20px;
        padding-bottom: 20px;

    h2 {
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 5px;
        color: blue;
    }

    select {
        padding: 5px;
        margin-bottom: 10px;
        border: 1px solid #DDD;
        border-radius: 3px;
        width: 100%;
    }

    option {
        font-weight: 400;
    }

    @media screen and (max-width: 520px){
        margin-bottom: 10px;
        padding-bottom: 10px;
    }
`

export const FilterOptions = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 3rem;

    @media screen and (max-width: 520px){
        flex-direction: column;
        gap: 1rem;
    }
`