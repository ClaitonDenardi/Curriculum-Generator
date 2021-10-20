import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  height: ${({ collapse }) => collapse && "60px"};
  overflow: ${({ collapse }) => (collapse ? "hidden" : "auto")}; ;
`;

export const ContainerScroll = styled.div`
  max-height: 400px;
  overflow: ${({ collapse }) => (collapse ? "hidden" : "auto")}; ;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const ItemData = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
`;

export const ItemCommands = styled.div`
  display: flex;
  width: 15%;
`;

export const ItemRow = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Input = styled.input`
  width: 42%;
  border-radius: 8px;
  padding: 8px 16px;
  display: block;
  background-color: rgb(242, 245, 250);
  border: 0px;
  pointer-events: unset;
  margin-bottom: 10px;
`;

export const TextArea = styled.textarea`
  width: 92% !important;
  border-radius: 8px;
  padding: 8px 16px;
  width: 100%;
  background-color: rgb(242, 245, 250);
  border: 0px;
  pointer-events: unset;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background: ${({ plus }) => (plus ? "#b1ec7a" : "#ffbd3f")};
  margin-right: ${({ plus }) => !plus && "5px"};
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
`;

export const PrimaryInfo = styled.li`
  margin-bottom: 0;
  font-size: 16px;
  font-weight: bold;
`;

export const SecondaryInfo = styled.p`
  margin: 0;
  font-size: 14px;
`;

export const Dates = styled.span`
  margin: 0;
  font-size: 14px;
  color: #878787;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 14px;
`;
