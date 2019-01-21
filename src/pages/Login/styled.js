import styled from 'styled-components';


export const LoginWrapper = styled.div`
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  background: #eee;
`;


export const LoginBox = styled.div`
  width: 400px;
  height: 200px;
  margin: 100px auto;
  padding-top: 20px;
  background: #fff;
  box-shadow: 0 0 8px  rgba(0,0,0,.1);
`;

export const LoginTitle = styled.div`
  text-align: center;
  font-size: 24px;
  line-height: 30px;
  padding: 8px 0;
`;

export const Input = styled.input`
  display: block;
  width: 240px;
  height: 30px;
  line-height: 30px;
  box-sizing: border-box;
  padding: 0 10px;
  margin: 10px auto;
  color: #777;
  border-radius: 4px 4px 0 0;
  border: 1px solid #c8c8c8;
`;


export const Button = styled.div`
  width: 240px;
  box-sizing: border-box;
  color: #ffffff;
  background: #3194d0;
  border-radius: 15px;
  margin: 10px auto;
  padding: 9px 18px;
  text-align: center;
`;
