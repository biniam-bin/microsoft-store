import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeroContainer = styled.div`
  position: relative;
  img {
    width: 100%;
    object-fit: cover;
    margin: auto;
  }
`;

export const HeroInfoContainer = styled.div`
  z-index: 20;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  padding: 0 35px;

  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.02) 100%
  );
  /* background: red; */
`;

export const HeroInfo = styled.div`
  /* background: red; */
  z-index: 30;
  width: 100%;
  height: 100%;
  display: flex;
  transform: translateY(30%);
  .text {
    color: white;
    h1 {
      font-size: 40px;
    }
    p {
      margin: 1.2rem 0;
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 13px 35px;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      background: linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(0, 0, 0, 0.2) 100%
      );
    }
  }
  @media (max-width: 500px) {
    .text {
      p {
        margin: 0.2rem;
      }
    }
  }
`;

export const HeroCardsContainer = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.1) 0%,
    var(--primary-color) 100%
  );
  margin-top: -6%;
  display: flex;
  align-items: center;
  overflow-x: scroll !important;
  z-index: 100;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 500px) {
    margin-top: 0;
  }
`;

export const HeroCardContainer = styled.div`
  width: 220px;
  min-width: 220px;
  max-width: 220px;
  border: 3px solid pink;
  z-index: 101;
  border-radius: 10px;
  padding: 0;
  margin: 0 10px;
  cursor: pointer;
  position: relative;
  img {
    height: 100%;
    border: none;
    object-fit: cover;
    border-radius: 10px;
  }
  div {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.02) 100%
    );
  }
`;

export const TopFreeContainer = styled.div`
  background: var(--primary-color);
  padding: 150px 40px;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p > a {
      color: #f9629f;
      text-decoration: none;
      :hover {
        cursor: pointer;
        background-color: yellow;
      }
    }
  }
  .cards {
    margin-top: 20px;
  }
`;

export const TopCardsContainer = styled.div`
  margin-top: 20px;
  /* background-color: blue; */
  display: grid;
  align-items: center;
  justify-content: center;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;
export const TopCardContainer = styled.div`
  background: var(--secondary-color);
  border-radius: 8px;
  margin: 2px;
  height: 150px;
  width: 100%;
  display: flex;
  transition: all 0.3s ease-in;
  justify-content: space-between;
  /* grid-template-columns: 100px auto 80px; */
  align-items: center;
  padding: 1.5rem;
  img {
    border-radius: 8px;
    width: 100px;
    height: 100px;
  }
  .content {
    /* background: red; */
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 0 0.8rem;
    .name {
      font-weight: 600;
      font-size: 15px;
    }
    .cat {
      font-size: 13px;
      margin: 8px 0;
    }
    .rating {
      display: flex;
      font-size: 12px;
    }
  }
  .lable {
    /* background: red; */
    height: 100%;
    font-size: 14px;
    span {
      background-color: var(--primary-color);
      padding: 6px 9px;
      border-radius: 5px;
    }
  }
  :hover {
    transform: translateY(-4px);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }
`;
