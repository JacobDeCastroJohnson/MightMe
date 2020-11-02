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
  background: rgb(2,0,36);
  background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(209,222,244,1) 0%, rgba(237,230,188,0) 51%);
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
        <h1> Welcome Back Susan!</h1>
        <img src="https://mightymemvp.s3-us-west-1.amazonaws.com/mvp_ATeam/Hero5.jpg" alt="Hero User 5" width="340" height="500"/>
      </WelcomeWrapper>
    )
  }
}

export default Welcome;