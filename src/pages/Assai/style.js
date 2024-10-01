import styled from "styled-components";
import assaiCapa from '../../assets/AssaiCapa.jpg'

export const Container = styled.div`
    background-color: #130f40;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;

    .swiper {
        width: 100%;
        height: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
        background-color: transparent;

        @media (max-width: 430px) {
            height: 250px;
        }
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-color: transparent;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .market-name {  
        text-align: center;
        color: #fff;
        margin-top: 8px;
        font-size: 1.2rem;
    }
`

export const Header = styled.div`
    background-image: url(${assaiCapa});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 200px;
    position: relative; 

    @media (max-width: 430px) {
        background-position: 0%;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 150px;
        background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
    }
`

export const SubHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-top: 20px;

  h1 {
    color: white;
    text-align: center;
    font-size: 25px;
  }
`

export const ContainerMarcas = styled.div`
    width: 800px;
    max-width: 93vw;
    margin: 10px auto 30px;
    background-color: #efefef;
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: 1vw 1vw 1vw #000, 0 0 3vw #E6E6FA, 0 0 3vw #E6E6FA, 0 0 3vw #E6E6FA;

    h2 {
        text-align: center;
        font-weight: bold;
        color: #28a745;
        border-bottom: 2px solid #000;
        padding-bottom: 10px;
    }
`

export const AddTaskForm = styled.form`  
  display: flex;
  flex-direction: column;
  gap: 10px;  
  margin: 20px 0;  

  .ContainerTask {
    display: flex;
  }

  select {
    padding: 10px;
    border: none;

    option {
        width: 100%;
    }
  }
  
  input {  
    padding: 10px;
    width: 40%;
    border: 2px solid #ccc;  
    border-radius: 4px;
    font-weight: bold;
  }  

  button {
    font-size: 15px;
    font-weight: bold;
    margin-left: 10px;
    width: 60%;
    padding: 8px 16px;  
    border: none;  
    background-color: #28a745;  
    color: white;  
    border-radius: 4px;  
    cursor: pointer;  

    &:hover {  
      background-color: #218838;  
    }  
  }  
`;  

export const TaskCard = styled.div`  
  display: flex;  
  align-items: center;
  justify-content: space-around;
  gap: 5px;
  margin: 10px 0;  
  padding: 10px;  
  border: 1px solid #ccc;  
  border-radius: 4px;

  .input {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    input {
        width: 18px;
        height: 18px;
    }
  }
  
  button {
    background-color: transparent;
    border: none;

    .icon {
        font-size: 23px;
        color: red;
        opacity: 1;

        &:active {
            opacity: 0.6;
        }
    }
  }
`;  