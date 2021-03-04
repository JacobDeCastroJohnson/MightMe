import React from 'react';
import styled from 'styled-components';

const WelcomeWrapper = styled.div`
  ${'' /* display: flex; */}
  height: 100%;
  margin: auto;
  text-align: center;
  margin-top: 0px;
  width: 100%;
  background: white;
  padding-bottom: 40px;
`;

const WelcomeText = styled.div`
  color: rgb(17,113,130);
  font-family: fantasy;
  font-size: xxx-large;
`;

class Welcome extends React.Component {
  constructor() {
    super();

    this.state = {

    }
    //THIS BINDING AREA
  }

  render() {

    return (
      <WelcomeWrapper>
        <WelcomeText> Welcome Back, Susan!</WelcomeText>
        <img src="https://mightymemvp.s3-us-west-1.amazonaws.com/mvp_ATeam/Hero5.jpg" alt="Hero User 5" width="340" height="500"/>
      </WelcomeWrapper>
    )
  }
}

export default Welcome;