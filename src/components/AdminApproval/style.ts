import { BsCalendarCheck } from 'react-icons/bs';
import styled from 'styled-components';

export const ApprovalWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: ${(props) => props.theme.color.beige};
`;

export const SeleteTabArea = styled.div`
  color: ${(props) => props.theme.color.darkBrown};
  font-size: ${(props) => props.theme.fontSize.xlarge};
  font-weight: ${(props) => props.theme.fontWeight.dark};
  padding-top: 26px;
  width: 100%;

  &::after {
    content: '';
    display: block;
    height: 1px;
    margin-top: 25px;
    width: 100%;
    background-color: ${(props) => props.theme.color.darkBrown};
  }
  span:first-child {
    padding-left: 37.5px;
    margin-right: 50px;
  }
`;

export const CalendarIcon = styled(BsCalendarCheck)`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  margin-left:50%;
`;
