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

const LatestBtn = styled.button`
  padding: 40px 400px;
  margin-top: 15px;
  font-size: 35px;
  background-color: rgb(104 187 201);
`;

const LatestBtn2 = styled.button`
  padding: 40px 378px;
  margin-top: 15px;
  font-size: 35px;
  background-color: rgb(104 187 201);
`;

const LatestBtn3 = styled.button`
  padding: 40px 380px;
  margin-top: 15px;
  font-size: 35px;
  background-color: rgb(104 187 201);
`;

const LatestBtn4 = styled.button`
  padding: 40px 390px;
  margin-top: 15px;
  font-size: 35px;
  background-color: rgb(104 187 201);
`;

const LatestNews = (props) => {

  //iframe URLs
  const newsFeed = [
    'https://www.cortexyme.com/trials/',
    'http://med.stanford.edu/adrc.html',
    'https://www.alz.org/help-support/caregiving/daily-care/food-eating',
    'https://www.timeout.com/san-diego',
  ];

  const source1 = 'https://www.cortexyme.com/trials/';
  const source2 = 'http://med.stanford.edu/adrc.html';
  const source3 = 'https://med.stanford.edu/content/dam/sm/adrc/documents/3-17_Stanford_ADRC_Newsletter.pdf';
  const source4 = 'https://www.thrillist.com/entertainment/san-diego/things-to-do-in-san-diego';

  const { obj, modal, index } = props;
  console.log(props);

  return (
    <LatestWrapper>
      <h1> Latest News</h1>
      <LatestBtn onClick={(e) => modal(e, index, source1 )}> Clinical Trials</LatestBtn>
      <LatestBtn2 onClick={(e) => modal(e, index, source2 )}> Support Groups</LatestBtn2>
      <LatestBtn3 onClick={(e) => modal(e, index, source3 )}> Diet & Exercise </LatestBtn3>
      <LatestBtn4 onClick={(e) => modal(e, index, source4 )}> Entertainment</LatestBtn4>

      <finalP> </finalP>
    </LatestWrapper>
  )
}

export default LatestNews;