import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position relative;
`;

export const ContentFormResponse = styled.div`
  width: 60rem;
  height: auto;
  padding: 2rem;
  background-color: #ccc;
  border-radius: 2rem;
  box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    width: 80%;
    margin: 0 auto;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    input[type="text"] {
      width: 60%;
      padding: 0.5rem;
      border: 0.15rem solid #2d2d2d;
      border-radius: 1rem;
      font-size: 1rem;
      &:focus {
        outline: none;
      }
    }

    button[type="submit"] {
      width: 15%;
      border: none;
      font-size: 1.125rem;
      padding: 0.4rem;
      border-radius: 3rem;
      background-color: #ffffff;
      border: 0.15rem solid #2d2d2d;
      transition: 0.4s;

      &:hover {
        background-color: #2d2d2d;
        color: #ffffff;
      }
    }
  }
`;

export const ContentList = styled.div`
  width: 40rem;
  margin: 0 auto;
  padding: 0.5rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 1rem;
  position: relative;

  &.overflow {
    height: 10rem;
    overflow-y: auto;
    overflow-x: hidden;

    scrollbar-width: thin; /* Firefox */
    scrollbar-color: #cccccc transparent;

    &::-webkit-scrollbar {
      width: 6px; /* Largura da barra de rolagem */
    }

    &::-webkit-scrollbar-thumb {
      background-color: #cccccc; /* Cor da barra de rolagem */
      border-radius: 3px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent; /* Fundo da barra */
    }
  }

  &.overflow > * {
    max-width: 100%;
  }

  ul {
    width: 100%;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      width: 90%;
      list-style-type: none;
      font-size: 1.5rem;
      border-bottom: 0.1rem solid #ccc;
      padding-bottom: 1rem;

      &:not(:first-child) {
        padding-top: 1rem;
      }
    }
  }
`;

export const ContentButotn = styled.div`
  button {
    width: 100%;
    border: 0.15rem solid #2d2d2d;
    background-color: #ffffff;
    border-radius: 2rem;
    transition: 0.4s;
    
    &:hover {
      background-color: #2d2d2d;
      color: #ffffff;
    }
  }
`;
