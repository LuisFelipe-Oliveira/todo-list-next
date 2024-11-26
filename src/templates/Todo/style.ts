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
  width: 80%;
  height: 50%;
  padding: 1rem;
  background-color: #ccc;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    width: 80%;
    margin: 0 auto;
    margin-top: 5rem;
    display: flex;
    align-items: center;

    input[type="text"] {
      width: 60%;
      padding: 0.5rem;
      border: 0.15rem solid #2d2d2d;
      &:focus {
        outline: none;
      }
    }

    button[type="submit"] {
      border: none;
      font-size: 1.125rem;
      padding: 0.4rem;
    }
  }

  ul {
    li {
      list-style-type: none;
      font-size: 1.5rem;
      &:not(:last-child) {
        padding-bottom: 0.5rem;
      }
    }
  }
`;
