import styled from "styled-components";
import theme from "../../../../styles/theme";

interface stateProps {
  state: string
}

export const stateSpan = styled.span<stateProps>`
  opacity: ${(props) => {
      if((props.state === '승인완료') || (props.state === '승인대기')){
        return 1
      } else return 0.5
    }};
  background-color: ${theme.color.lightBrown};
  color: ${theme.color.white};
  padding: 0.4rem;
  border-radius: 5px;
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
`
export const stateDiv = styled.div`
  display: flex;
  gap: 0.5rem;
`