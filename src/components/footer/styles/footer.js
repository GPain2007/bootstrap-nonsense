import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  max-width: 100vw;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.9);
  width: 100vw;
  height: 886px;
  left: 0px;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 252px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1512px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
`;

export const Title = styled.h1`
  width: 464px;
  height: 48px;
  left: 76px;
  // top: 197px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 800;
  font-size: 30px;

  color: #ffffff;
`;
export const Address = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;

  color: #ffffff;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const Text = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
  line-height: 1.25rem;
`;
export const Break = styled.p`
  flex-basis: 100%;
  height: 200;
`;

export const PictureContainer = styled.div`
  width: 241.08px;
  height: 202.81px;
  left: 118px;
  top: 506.19px;

  background: #0a0a0a;
`;
export const PicImg = styled.img`
  width: 227.05px;
  height: 183.23px;
  left: 123.74px;
  top: 503px;
`;
