import styled from 'styled-components';

export const ApprovalWapper = styled.div`
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

export const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(3px);
  z-index: 90;
  .rbc-calendar {
    position: absolute;
    background-color: #cab3a3;
    z-index: 99;
    top: 20px;
    left: 55px;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px;
  }
  .rbc-toolbar-label {
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;
