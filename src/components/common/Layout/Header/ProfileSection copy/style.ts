import styled from 'styled-components';

export const CardContainer = styled.aside`
  background-color: ${({ theme }) => theme.color.darkBrown};
  border-radius: 8px;
  padding: 10px;
  display: flex;
  gap: 10px;
`;
export const TextContent = styled.div`
  color: ${({ theme }) => theme.color.lightBeige};
  text-align: end;
`;
export const NameSpan = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
export const EmailSpan = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
`;
export const ImageWrapper = styled.div`
  width: 38px;
  padding: 2px;
  box-sizing: border-box;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 2px dotted rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ThumbnailImage = styled.img`
  background-color: ${({ theme }) => theme.color.brown};
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
`;
