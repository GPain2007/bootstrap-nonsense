import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  max-width: 100vw;
  flex-direction: column;

  width: 100vw;
  height: 4289px;
  left: 0px;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const SubContainer = styled.div`
  display: inline-flex;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 135px;
  margin-right: 95px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 291px;
`;

export const Title = styled.div`
  width: 295px;
  height: 36px;

  margin-left: 135px;

  font-family: "Gotham";
  font-style: normal;
  font-weight: 500;
  font-size: 38.0046px;
  line-height: 36px;

  color: #000000;
`;

export const Text = styled.p`
  width: 180px;
  height: 40px;
  margin-top: 0px;
  margin-left: 393px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  line-height: 160%;
  /* identical to box height, or 40px */

  color: #000000;
`;

export const SubTitle = styled.p`
  width: 897px;
  height: 97px;
  left: 108px;
  top: 373px;
  // margin-left: 161px;
  // margin-top: 132px;
  // font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 64px;
  line-height: 160%;

  color: #000000;
`;

export const SubText = styled.p`
  width: 765px;
  height: 229px;
  left: 108px;
  top: 470.24px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 160%;
  /* or 40px */

  color: rgba(0, 0, 0, 0.8);
`;

export const Button = styled.button`
  padding: 6.7958px 68.9288px;
  border-radius: 10px;
  margin-inline-start: auto;
  margin-top: 0px;
`;
