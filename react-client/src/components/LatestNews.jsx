import React from 'react';
import styled from 'styled-components';

const LatestWrapper = styled.div`
  margin: auto;
  text-align: center;
  height: 100%;
  ${'' /* padding-right: 20px; */}
  ${'' /* margin-bottom: 20px; */}
  margin-top: 0px;
  width: 100%;
  background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(209,222,244,1) 0%, rgba(237,230,188,0) 51%);
  position: center;
`;

const finalP = styled.p`
    margin-bottom: 0;
    padding-bottom: 40px !important;
`;


const LatestNews = () => {
  return (
    <LatestWrapper>
      <h1> Latest News</h1>
      <button> Participate in clinical trials</button>
        <p> Open enrollment for: CortexPlus, Alluvue, and NeuroGlow</p>
      <button> Research into tomorrow's treatments</button>
       <p> Memory enhancing superfood diet</p>
       <p> Daily Exercise Routines </p>
      <button> Programs & Support</button>
        <p> Bamford University Patient Support Group</p>
        <p> Alz Association Patient Support Group </p>
      <button> Entertainment</button>
        <p> YMCA Water aerobics class in San Francisco!</p>
        <p> Barona Casino Gamble an Salsa Night!</p>
        <finalP> Coronado Beach Bonfire Night!</finalP>
    </LatestWrapper>
  )
}

export default LatestNews;