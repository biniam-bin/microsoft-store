import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: var(--primary-color);
  /* height: 60px; */
  position: sticky;
  top: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  padding: 15px 5rem;
  padding-bottom: 2px;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: flex;
      height: 30px;
      width: 30px;
      cursor: pointer;
    }
    .input__container {
      flex: 0.5;
      display: flex;
      align-items: center;
      background-color: var(--secondary-color);
      padding: 3px 15px;
      border-radius: 3px;

      input {
        font-size: 15px;
        padding: 5px 0;
        background-color: transparent;
        color: var(--text-color);
        outline: none;
        border: none;
        width: 100%;
      }
      span {
        background-color: var(--secondary-color);
        padding-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .login__container {
      padding: 10px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      background-color: var(--secondary-color);
    }
  }

  .bottom{
    /* background: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    
  }
  @media (max-width: 500px) {
    padding: 10px 8px;
    .top {
      .input__container {
        flex: 0.7;
      }
    }
  }
`;

export const Nav = styled.div`
  margin: 0 15px;
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 25px;
  cursor: pointer;
 
  p {
    
    font-size: 12px;
  }
`;