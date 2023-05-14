import styled from "styled-components";

export const BigCalendarContainer = styled.div`
  .rbc-off-range-bg{
    background-color:#AE9A8C;
  }
  .rbc-event,
  .rbc-event-continues-after {
    background-color: transparent;
    height: 30px;
    
  }
  .rbc-today{
    background-color: ${({ theme }) => theme.color.lightBeige};
  }
  .rbc-show-more {
    color: ${({ theme }) => theme.color.darkBrown};
    background-color:transparent
  }
`