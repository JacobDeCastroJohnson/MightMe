import React from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.section`
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2000;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  padding-top: 12px;
  display: flex;
  ${'' /* flex-direction: row;
  align-items: flex-end; */}
  justify-content: center;
`;

const ModalStyle = styled.div`
  position: fixed;
    z-index: 10;
    min-height: 430px;
    width: 550px;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    background-color: white;
    border-color: black;
    border-radius: 1px;
    border-radius: 15px;
    display: grid;
    grid-template-rows: 64px auto 74px;
`;

const Close = styled.button`
  ${'' /* border: none !important; */}
  border-color: black;
  margin-top: 15px;
  ${'' /* background: transparent; */}
  font-family: 'TimesNewRoman';
  font-size: 18px;
  line-height: 20px;
  margin-left: 16px;
  &:focus {
    outline: none;
  }
`;

const MessageHeader = styled.div`
  text-align: center;
`;

const MessageBox = styled.input`
  ${'' /* border: none !important; */}
  background: white;
  font-family: 'TimesNewRoman';
  font-size: 18px;
  line-height: 20px;
  ${'' /* margin-left: 16px; */}
  padding: 0.5em;
  margin: 0.5em;
  border-color: black;
  witdh: 500px !important;
  ${'' /* height: 400px; */}
`;
const MemLaneModal = (props) => {
  const { children } = props;


const onClose = (e) => {
  props.onClose && props.onClose(e);
};

const handleClick = (event, index) => {
  event.preventDefault();
};

if (!props.show) {
  return null;
}
return (
  <ModalBackdrop>
    <ModalStyle>
      { children }
      <div>
        <Close onClick={(e) => { onClose(e); }}> CLOSE </Close>
      <MessageHeader>
        <h1> Message NAME</h1>
        <div> Person Photo </div>
      </MessageHeader>
      <MessageBox type="text" placeholder="Write your message here"/>
      </div>
    </ModalStyle>
  </ModalBackdrop>
)
};

export default MemLaneModal;