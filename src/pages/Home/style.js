import styled from "styled-components";

export const Container = styled.div`
    background-color: #130f40;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        color: white;
        font-size: 30px;
    }

    h2 {
        color: white;
        font-size: 22px;
    }

    .swiper {
        width: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 300px;
        height: 300px;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
    }

    .market-name {  
    text-align: center;
    color: #fff;
    margin-top: 8px;
    font-size: 1.2rem;
  }
`