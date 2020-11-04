import React from 'react';
import styled from 'styled-components';
import Iframe from 'react-iframe';

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
  justify-content: center;
`;

const ModalStyle = styled.div`
  position: fixed;
    z-index: 10;
    height: 880px;
    width: 1300px;
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
  margin-right: 16px;
  margin-bottom: 10px;
  border-radius: 5px;
  border-width: thin;
  background-color: pink ;
`;

// ========================================================================

const NewsModal = (props) => {
  const { children, data, index, url} = props;
  console.log('URL Check: ', url);

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
        <Close onClick={(e) => { onClose(e); }}> Close </Close>
        <Iframe url={url}
        width="1296px"
        height="780px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
    </ModalStyle>
  </ModalBackdrop>
)
};

export default NewsModal;