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
  color: ${theme.color.lightBrown};
  padding: 0.4rem;
  font-weight: ${theme.fontWeight.bold};
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const stateDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 16rem;
`