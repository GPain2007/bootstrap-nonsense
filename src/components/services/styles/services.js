import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  max-width: 100vw;
  flex-direction: column;

  width: 100vw;
  height: 1346px;
  left: 0px;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const SubContainer = styled.div`
  position: absolute;

  width: 100vw;
  height: 355px;
  left: 1px;
  top: 1778px;
  display: flex;
  justify-content: space-between;

  background: #f8f8f8;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 291px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 135px;
  margin-right: 95px;
`;

export const Title = styled.div`
  position: absolute;
  width: 311px;
  height: 102px;
  left: 129px;
  top: 1298px;
  // margin-left: 161px;
  // margin-top: 132px;
  // font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 64px;
  line-height: 160%;

  color: #000000;
`;
export const SubTitle = styled.h1`
  position: absolute;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 160%;

  /* identical to box height, or 48px */

  color: #000000;
`;

export const Text = styled.p`
  position: absolute;

  width: 886px;
  height: 206px;
  left: 129px;

  top: 1414px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 160%;
  /* or 64px */

  color: #000000;
`;

export const SubText = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 160%;
  left: 135px;
  margin-top: 87px;
  /* or 34px */

  color: #000000;
`;
