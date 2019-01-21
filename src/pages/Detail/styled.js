import styled from 'styled-components';


export const DetailWrapper = styled.div`
  width: 620px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 40px;
  overflow: hidden;
`;

export const DetailTitle = styled.div`
  word-break: break-word;
  font-size: 28px;
  line-height: 38px;
  font-weight: 700;
  margin-top: 20px;
`;


export const DetailContent = styled.div`
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  p {
    margin-bottom: 25px;
    line-height: 26px;
  }
  img {
    width: 600px;
    height: 370px;
    overflow: hidden;
    margin: 20px auto;
  }
`;
