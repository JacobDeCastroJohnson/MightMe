import React from 'react';
import styled from 'styled-components';

const LatestWrapper = styled.div`
  margin: auto;
  text-align: center;
  height: 100%;
  padding-right: 20px;
  ${'' /* margin-bottom: 20px; */}
  margin-top: 0px;
  width: 100%;
  background-color: teal;
  position: center;
`;


const LatestNews = () => {
  return (
    <LatestWrapper>
      <h3> Latest News</h3>
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
        <p> Coronado Beach Bonfire Night!</p>
    </LatestWrapper>
  )
}

export default LatestNews;