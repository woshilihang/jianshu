import styled from 'styled-components';
import logoPic from '../../static/logo.png';


export const HeaderWrapper = styled.div`
  z-index: 1;
  position: relative;
  height: 56px;
  line-height: 56px;
  border-bottom: 1px solid #f0f0f0;
  min-width: 768px;
  max-width: 1440px;
  margin: 0 auto;
`;


export const Logo = styled.span`
  position: absolute;
  top: 0;
  left： 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  &.left {
    float: left;
  }
  &.right {
    float: right;
  }
  &.active {
    color: #ea6f5a;
  }
  &.fontColor {
    color: #969696;
  }
`

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 13px;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 50%;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background: #ffffff;
`;
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  color: #969696;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
`;

export const SearchInfoSwitch = styled.div`
  font-size: 13px;
  float: right;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`;

export const SearchInfoItemWrapper = styled.div`
  overflow: hidden;
`;

export const SearchInfoItem = styled.a`
  display: block;
  float:left;
  line-height: 20px;
  color: #787878;
  padding: 2px 6px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 0 10px 10px 0;
  font-size: 12px;
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 30px 0 20px;
  outline: none;
  border: 1px solid #eee;
  border-radius: 40px;
  font-size: 14px;
  background: #eee;
  // transition: width .5s ease-in;
  &::placeholder {
    color: #999;
  }
  &.focused {
    // transition: width .5s ease-in;
    width: 240px;
  }
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;


export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 20px;
  margin-top: 9px;
  margin-right: 20px;
  border: 1px solid #ec6149;
  padding: 0 20px;
  font-size: 14px;
  &.reg {
    color: #ea6f5a;
    border: 1px solid rgba(236,97,73,.7);
  }
  &.writing {
    background: #ea6f5a;
    color: #fff;
  }
`;







// sd
