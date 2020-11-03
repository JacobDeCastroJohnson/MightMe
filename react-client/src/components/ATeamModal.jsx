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
    min-height: 470px;
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
  border-color: black;
  margin-top: 15px;
  font-size: 18px;
  line-height: 20px;
  margin-left: 16px;
  ${'' /* &:focus {
    outline: none;
  } */}
  border-radius: 5px;
  border-width: thin;
`;

const MessageHeader = styled.div`
  text-align: center;
`;

const MessageBox = styled.input`
  background: white;
  font-family: 'TimesNewRoman';
  font-size: 18px;
  line-height: 20px;
  margin-left: 48px;
  margin-top: 20px;
  border-color: black;
  width: 450px;
  height: 230px;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 90px;
  `;

  const ModalHead = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const ModalName = styled.div`
    margin-top: 15px;
    ${'' /* margin-right: 62px; */}
  `;

  const Filler = styled.div`
    margin-top: 15px;
    margin-right: 15px;
    color: white;
  `;

// ========================================================================

const ATeamModal = (props) => {
  const { children, data, index} = props;
  console.log(data);


const onClose = (e) => {
  props.onClose && props.onClose(e);
};

const handleClick = (event, index) => {
  event.preventDefault();
};

if (!props.show) {
  return null;
}
// console.log('Props check at ATeam Modal: ', props);
// console.log('Props check at ATeam Modal: ', index);
return (
  <ModalBackdrop>
    <ModalStyle>
      { children }
      <div>
      <ModalHead>
        <Close onClick={(e) => { onClose(e); }}> CLOSE </Close>
        <ModalName> Message {props.data[index].ATeam.firstName}</ModalName>
        <Filler> Space 2</Filler>
      </ModalHead>
        <MessageHeader>
          <Image src={props.data[index].ATeam.photo} alt=""/>
        </MessageHeader>
        <MessageBox type="text" placeholder="Write your message here"/>
      </div>
    </ModalStyle>
  </ModalBackdrop>
)
};

export default ATeamModal;