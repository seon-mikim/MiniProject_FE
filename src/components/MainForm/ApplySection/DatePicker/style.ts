import ReactDatePicker from "react-datepicker";
import styled from "styled-components";

export const StyledDatePicker = styled(ReactDatePicker)`
  box-sizing: border-box;
  height: 40px;
  border: none;
  line-height: 100%;
  background-color: #fff;
  margin: 10px 0 20px 0;
  padding: 0 15px;
  font-size: ${({ theme }) => theme.fontSize.large};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: ${({ theme }) => theme.color.darkBrown};
  font-weight: 400;
  &:focus{
    outline:none;
  }
`;