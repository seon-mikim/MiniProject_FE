import { BsCalendarCheck } from "react-icons/bs";
import styled from "styled-components";

export const Section = styled.div`
  box-sizing:border-box;
  width: 100%;
  background-color: ${({ theme }) => theme.color.beige};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  
`
export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: 15px;
`

export const SectionHeader = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  border-bottom:1px solid ${({ theme }) => theme.color.darkBrown};
`
export const HeaderRight = styled.div`
  display:flex;
`

export const CalendarIcon = styled(BsCalendarCheck)`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.large};
  margin-left:20px;
  padding: 15px;
`

export const NavButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.whiteBeige};
  border: none;
  border-radius: 8px;
  padding: 5px 20px;
  margin-right:15px;
  color: ${({ theme }) => theme.color.darkBrown};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.dark};
`

export const ButtonWrap = styled.div`
  padding: 15px;
  .active {
    background-color: ${({ theme }) => theme.color.darkBrown};
    color: ${({ theme }) => theme.color.white};
  }
`

export const ListWrap = styled.ul`
  height:552px;
  padding: 0 15px;
  overflow-y: auto;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  & > * {
    margin-bottom: 20px;
  }
  &::-webkit-scrollbar {
    width: 5px;
    background-color: ${({ theme }) => theme.color.lightBeige};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.lightBrown};
    border-radius: 5px;
  }
`

export const EventBox = styled.div`
  background-color: ${({ theme }) => theme.color.darkBrown};
  border-radius: 8px;
  padding: 8px 20px;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.dark};
`

export const ModalBackground = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  backdrop-filter:blur(3px);
  z-index:90;
  .rbc-calendar{
    position: absolute;
    background-color: #CAB3A3;
    z-index: 99;
    top:20px;
    left:55px;
    right:0;
    bottom:0;
    margin:auto;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px;
    transform:translateY(-20px)
  }
  .rbc-toolbar-label{
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
  `