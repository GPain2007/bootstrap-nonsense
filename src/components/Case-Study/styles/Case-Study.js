import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  max-width: 100vw;
  flex-direction: column;
  background-color: gainsboro;
  width: 100vw;
  height: 1056px;
  left: 0px;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
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
  position: absolute;

  width: 886px;
  height: 206px;
  left: 129px;

  top: 6646px;

  //   font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 160%;
  /* or 64px */

  color: #000000;
`;

export const Text = styled.p`
  position: absolute;
  width: auto;
  height: 102px;
  left: 129px;
  top: 6675px;
  // margin-left: 161px;
  // margin-top: 132px;
  // font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 64px;
  line-height: 160%;

  color: #000000;
`;
