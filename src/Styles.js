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

export const Section = styled.h2`
  margin-bottom: 0;
  border-bottom: 1px solid #000;
`;

export const Editor = styled.div`
  width: 50vw;
  height: 100vh;
  max-height: 100vh;
  overflow: auto;
`;

export const Preview = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  background-color: rgb(211, 211, 211);
  background-position: center center, center center, 0% 0%;
  background-repeat: repeat, repeat, repeat;
  background-attachment: scroll, scroll, scroll;
  background-image: linear-gradient(90deg, rgb(250, 255, 243) 20px, transparent 1%),
    linear-gradient(rgb(250, 255, 249) 20px, transparent 1%), none;
  background-origin: padding-box, padding-box, padding-box;
  background-clip: border-box, border-box, border-box;
  background-size: 22px 22px;
`;

export const Paper = styled.div`
  width: 30vw;
  height: 85vh;
  background: rgb(255, 255, 255) none repeat scroll 0% 0%;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 0px 20px 12px;
`;

export const Scale = styled.div`
  scale: 0.5;
  margin-top: -100px;
  margin-left: -100px;
  display: flex;
`;
