import styled from "styled-components";


export const SearchInputArea = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const SearchFilter = styled.select`
  flex-shrink: 1;
  margin-right: 25px;
  padding: 10px 15px;
  height: 100%;
  border: none;
  border-radius: 5px;
  font-weight: inherit;
  text-align: center;
  filter: drop-shadow(0 0 1px grey);

  & > option {
    text-align: start;
    font-weight: inherit;
  }
`;

interface SearchInputProps {
  isPreviewRequired: boolean;
}

export const SearchInput = styled.input.attrs<SearchInputProps>((props) => ({
  isSearchValid: props.isPreviewRequired || false,
}))<SearchInputProps>`
  min-width: 300px;
  flex-grow: 1;
  border-radius: 5px;
  border-bottom-left-radius: ${({ isPreviewRequired }) => (isPreviewRequired ? '0px' : '5px')};
  border-bottom-right-radius: ${({ isPreviewRequired }) => (isPreviewRequired ? '0px' : '5px')};
  padding: 10px 10px;
  border: none;
  font-weight: inherit;
  font-size: inherit;
  filter: drop-shadow(0 0 1px grey);
  &:focus {
    outline: unset;
  }
`;

export const SearchIconButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 5px;
  top: 50%;
  font-size: ${({ theme }) => theme.fontSize.base};
  transform: translateY(-50%);
  cursor: pointer;
`;

export const SearchInputResetButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 35px;
  top: 50%;
  font-size: ${({ theme }) => theme.fontSize.base};
  transform: translateY(-50%);
  cursor: pointer;

  transition: all 0.3s ease-out;
  &::after {
    content: "";
    position: absolute;
    height: 15px;
    top: 50%;
    transform: translateY(-55%);
    right: -5px;
    margin: 0 5px;
    border-right: 1px solid ${({ theme }) => theme.color.darkBrown};
  }

`;

export const filteredPreviewContainer = styled.div`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  max-height: 220px;
  position: absolute;
  top: 38.5px;
  right: 0;
  font-size: inherit;
  min-width: 300px;
  filter: drop-shadow(0 0 1px grey);

  & > ul {
    height: auto;
  }
  & > ul > li:last-child {
    border-bottom: none;
  
  }
  & > ul > li {
    border-bottom: 1px solid ${({ theme }) => theme.color.lightBeige};
  }


`;


