import React from 'react';
import styled from 'styled-components';

const WelcomeWrapper = styled.div`
  ${'' /* display: flex; */}
  height: 100%;
  margin: auto;
  text-align: center;
  padding-right: 20px;
  ${'' /* margin-bottom: 20px; */}
  margin-top: 0px;
  width: 100%;
  background-color: rgb(0, 153, 204);
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
        <h1> Welcome Back NAME!</h1>
        <img src="https://mightymemvp.s3-us-west-1.amazonaws.com/mvp_ATeam/Hero5.jpg" alt="Hero User 5" width="340" height="500"/>
      </WelcomeWrapper>
    )
  }
}

export default Welcome;