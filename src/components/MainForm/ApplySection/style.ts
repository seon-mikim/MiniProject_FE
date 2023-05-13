import styled, { css } from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const Tab = css`
  width: 75px;
  height: 45px;
  background-color: ${({ theme }) => theme.color.darkBrown};
  line-height: 45px;
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border: none;
  border-radius: 8px 8px 0 0;
  padding: 0;
  cursor: pointer;
  position:absolute;
  top:-45px;
`;

export const AnnualSection = styled.div`
  box-sizing: border-box;
  width: 400px;
  height: 720px;
  background-color: ${({ theme }) => theme.color.beige};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSize.large};
  position: relative;
  margin-left:20px;
  padding: 30px;
  .active{
    background-color:${({ theme }) => theme.color.beige};
  }
`;

export const AnnualTab = styled.button`
  ${Tab};
  left: 20px;
`;

export const WorkTab = styled.button`
  ${Tab};
  left: 100px;
`;

export const Form = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color.white};
  position: relative;
  .react-datepicker{
    width:100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border:none;
    margin-bottom:20px;
  }
  .react-datepicker__month-container{
    width:100%;
  }
  .react-datepicker__header{
    background-color:${({ theme }) => theme.color.darkBrown};
  }
  .react-datepicker__current-month,
  .react-datepicker__day-name{
    color:${({ theme }) => theme.color.white};
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--in-range{
    background-color:${({ theme }) => theme.color.lightBrown};
  }
  .react-datepicker__day--keyboard-selected{
    background-color:${({ theme }) => theme.color.beige};
  }
`;

export const FormBtn = styled.button`
  width:100%;
  height: 65px;
  color: inherit;
  background-color: ${({ theme }) => theme.color.lightBrown};
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  bottom:0;
  left: 0;
  right: 0; 
`;

