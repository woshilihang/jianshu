import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
`;

export const ImgWrapper = styled.div`
  margin-bottom: 30px;
  border-radius: 6px;
  overflow: hidden;
  // z-index: 1000;
  .bannerImg {
    width: 625px;
    height: 270px;
  }
`;


export const HomeRight = styled.div`
  float: right;
  margin-left: 15px;
  padding-top: 30px;
  width: 280px;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  border-bottom: 1px solid #f0f0f0;
`;

export const TopicItem = styled.div`
  float: left;
  overflow: hidden;
  margin: 0 12px 12px 0;
  background: #fff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .TopicImg {
    width: 32px;
    height: 32px;
    vertical-align: middle;
  }
`;

export const TopicFont = styled.div`
  display: inline-block;
  padding: 0 10px;
  font-size: 14px;
  color: #000;
  height: 30px;
  line-height: 30px;
`;

// ---------------- list style fragement start
export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .listPic {
    float: right;
    width: 125px;
    height: 100px;
    display: block;
  }
`;
export const ListInfo = styled.div`
  float: left;
  width: 500px;
  padding-right: 15px;
  box-sizing: border-box;
  /* border: 1px solid red; */
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
    margin: 0 0 8px;
  }
`;


// Recommend
export const RecommendWrapper = styled.div`
  margin: 0 0 30px 0;
  width: 280px;
`;
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  margin-bottom: 6px;
  border-radius: 4px;
  background: url(${(props) => props.imgUrl });
  background-size: contain;
`;














// --------
