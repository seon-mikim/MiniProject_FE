import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  background-color: ${(props) => props.theme.color.white};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07);
  width: 1233px;
  border-radius: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin: 20px auto 0 auto;
`;

export const CardContent = styled.div`
  width: 76%;
  margin-left: 20px;
  margin-right: 10px;
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserImgWrap = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const UserInfoWrap = styled.div`
  margin-left: 10px;
  width: 12%;
`;

export const UserName = styled.span`
  color: ${(props) => props.theme.color.darkBrown};
`;

export const UserEmail = styled.span`
  color: #737373;
  font-size: 12px;
  margin: 0;
`;

export const UserRole = styled.div`
  width: 7%;
  margin-left: 5px;
`;
export const EventTpyeWrap = styled.div`
  width: 15%;
  text-align: center;
`;

export const EventType = styled.span`
  display: inline-block;
  width: 36px;
  padding: 9.5px 32px;
  background-color: ${(props) => props.theme.color.brown};
  color: ${(props) => props.theme.color.white};
  border-radius: 8px;
`;
export const EventTypeDateWrap = styled.div`
  width: 32%;
  text-align: center;
`;

export const CreateDate = styled.div`
width: 25%;
text-align: center;
`

export const EventDate = styled.span`
  display: inline-block;
`;
export const ButtonArea = styled.div`
  margin-right: 40px;
  button:first-child {
    margin-right: 20px;
  }
`;
export const CheckButton = styled.button`
  border: none;
  width: 110px;
  height: 37px;
  border-radius: 8px;
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  background-color: ${(props) => (props.color === 'approve' ? props.theme.color.lightBrown : props.theme.color.brown)};
`;
