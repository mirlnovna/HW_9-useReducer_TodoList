import styled from "styled-components";

export const FORM = styled.div`
  & .input-add {
    border: none;
    outline: none;
    padding: 10px 20px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    flex: 1;
    font-family: inherit;
    font-size: 17px;
    color: #555;
  }
  & .btn-add {
    border: none;
    background-color: var(--azul);
    color: #fff;
    padding: 5px 40px;
    border-radius: 20px;
    font-family: inherit;
    cursor: pointer;
    font-size: 17px;
  }
`;
export const StyleList = styled.li`
  & .container-done {
    background-color: white;
    width: 24px;
    height: 24px;
    border-radius: 20px;
    border: 2px solid teal;
    cursor: pointer;
  }
  & .container-done.active {
    background-color: teal;
  }
  & .btn-delete {
    background-color: var(--rojo);
    color: #fff;
    padding: 15px;
    position: relative;
    left: 66%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    transition: all 0.3s;
    cursor: pointer;
    font-family: inherit;
  }
  & .btn-delete:hover {
    background-color: var(--rojo-hover);
  }
`;
