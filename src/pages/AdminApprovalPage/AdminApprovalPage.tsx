import React from 'react';
import * as S from './style';
import styled from 'styled-components';
import { useState } from 'react';

function AdminApprovalPage() {
  const [selectedTab, setSelectedTab] = useState('request');

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    console.log('click:', tab);
  };



  return (
    <S.ApprovalWapper>
      <div>
        <StSelectArea>
          <span onClick={() => handleTabClick('request')}>당직/연차 요청현황</span>
          <span onClick={() => handleTabClick('approval')}>당직/연차 승인내역</span>
        </StSelectArea>
        {selectedTab === 'request' && (
          <div>
            <StSearchAreaWrapper>
              <div>
                <StButton color="annual">연차</StButton>
                <StButton color="duty">당직</StButton>
              </div>
              <StMonth>
                <span>2023.05</span>
              </StMonth>
              <StSelectWapper>
                <select name="">
                  <option value="">이름</option>
                  <option value="">이메일</option>
                </select>
                <StInputWapper>
                  <input type="text" />
                </StInputWapper>
              </StSelectWapper>
            </StSearchAreaWrapper>
            <StCard>
              <div>
                <div>
                  <img src="http://via.placeholder.com/36" alt="" />
                </div>
                <span>김준태</span>
                <span>연차</span>
                <span>8:30:00~17:30:00</span>
                <span>2023.05.10</span>
              </div>
              <StButtonArea>
                <StCheckButton color="approve">승인</StCheckButton>
                <StCheckButton color="refuse">거절</StCheckButton>
              </StButtonArea>
            </StCard>
          </div>
        )}
        {selectedTab === 'approval' && (
          <div>
            <StSearchAreaWrapper>
              <div>
                <StButton color="annual">연차</StButton>
                <StButton color="duty">당직</StButton>
              </div>
              <StMonth>
                <span>2023.05</span>
              </StMonth>
              <StSelectWapper>
                <select name="">
                  <option value="">이름</option>
                  <option value="">이메일</option>
                </select>
                <StInputWapper>
                  <input type="text" />
                </StInputWapper>
              </StSelectWapper>
            </StSearchAreaWrapper>
            <StCard>
              <div>
                <div>
                  <img src="http://via.placeholder.com/36" alt="" />
                </div>
                <span>김준태</span>
                <span>연차</span>
                <span>8:30:00~17:30:00</span>
                <span>2023.05.10</span>
              </div>
              <StButtonArea>
                
                <div>거절</div>
              </StButtonArea>
            </StCard>
          </div>
        )}

        <div>
          <StPageNumber>
            <li>&lt;</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>&gt;</li>
          </StPageNumber>
        </div>
      </div>
    </S.ApprovalWapper>
  );
}

export default AdminApprovalPage;

const StSelectArea = styled.div`
  color: ${(props) => props.theme.color.darkBrown};
  font-size: ${(props) => props.theme.fontSize.xlarge};
  font-weight: ${(props) => props.theme.fontWeight.dark};
  padding-top: 26px;

  &::after {
    content: '';
    display: block;
    height: 1px;
    margin-top: 25px;
    width: 1308px;
    background-color: ${(props) => props.theme.color.darkBrown};
  }
  span:first-child {
    padding-left: 37.5px;
    margin-right: 50px;
  }
`;

const StSearchAreaWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 17px;
  padding-left: 37.5px;
  padding-right: 37.5px;
  button:first-child {
    margin-right: 17px;
  }
`;
const StButton = styled.button`
  border: none;
  width: 110px;
  height: 48px;
  border-radius: 8px;
  color: ${(props) => (props.color === 'annual' ? props.theme.color.white : props.theme.color.darkBrown)};
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  background-color: ${(props) =>
    props.color === 'annual' ? props.theme.color.darkBrown : props.theme.color.whiteBeige};
`;

const StMonth = styled.div`
  margin-left: 37.5px;
  border-radius: 8px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 65px;
  padding-left: 65px;
  background-color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

const StSelectWapper = styled.div`
  display: flex;
  select {
    text-align-last: center;
    text-align: center;
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 12px 18px;
    font-weight: ${(props) => props.theme.fontWeight.bold};
    font-size: ${(props) => props.theme.fontSize.base};
    color: ${(props) => props.theme.color.darkBrown};
    line-height: 16px;
    margin-left: 30px;
    margin-right: 30px;
    &:focus {
      outline: none;
      border-color: none;
      box-shadow: none;
    }
  }
`;

const StInputWapper = styled.span`
  display: inline-block;
  border-radius: 8px;
  background-color: ${(props) => props.theme.color.white};
  width: 587px;
  height: 48px;
  input {
    width: 500px;
    height: 43px;
    border: 1px solid transparent;
    margin-left: 10px;
    padding-left: 10px;
    font-size: ${(props) => props.theme.fontSize.base};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    &:focus {
      outline: none;
      border-color: none;
    }
  }
`;
const StCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.color.white};
  width: 1233px;
  border-radius: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin: 20px auto 0 auto;
  div:first-child {
    margin-left: 20px;
    margin-right: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    span {
      display: inline-block;
      margin: 0 40px;
      font-weight: ${(props) => props.theme.fontWeight.bold};
      color: ${(props) => props.theme.color.darkBrown};
    }
  }
`;

const StButtonArea = styled.div`
  margin-right: 40px;
  button:first-child {
    margin-right: 20px;
  }
`;
const StCheckButton = styled.button`
  border: none;
  width: 110px;
  height: 37px;
  border-radius: 8px;
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  background-color: ${(props) => (props.color === 'approve' ? props.theme.color.lightBrown : props.theme.color.brown)};
`;

const StPageNumber = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    padding: 20px;
  }
`;
