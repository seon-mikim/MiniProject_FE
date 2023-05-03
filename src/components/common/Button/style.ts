import styled, { withTheme } from 'styled-components';

interface ButtonProps {
  variant: 'lightBrown' | 'darkBrown' | 'beige';
  size: 'sm' | 'md' | 'lg';
  theme: any;
}

const ButtonComponent = styled.button<ButtonProps>`
  padding: 10px 25px;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 8px;
  border: none;
  transition: box-shadow 0.2s ease-in;
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: 0 0 1px 1px ${(props) => {
      switch (props.variant) {
        case 'lightBrown':
        case 'darkBrown':
          return props.theme.color.brown
        case 'beige':
          return props.theme.color.white
        default:
          return props.theme.color.brown
      }
    }
  };
  font-weight: ${(props) => props.theme.fontWeight.dark};
  background-color: ${(props) => {
    switch (props.variant) {
      case 'lightBrown':
        return props.theme.color.lightBrown;
      case 'darkBrown':
        return props.theme.color.darkBrown;
      case 'beige':
        return props.theme.color.whiteBeige;
      default:
        return props.theme.color.lightBrown;
    }
  }};
  color: ${(props) => {
    switch (props.variant) {
      case 'lightBrown':
      case 'darkBrown':
        return props.theme.color.white;
      case 'beige':
        return props.theme.color.darkBrown;
      default:
        return props.theme.color.white;
    }
  }};
  width: ${(props) => {
    switch (props.size) {
      case 'sm':
        return 'fit-content';
      case 'md':
        return '50%';
      case 'lg':
        return '100%';
      default:
        return 'auto';
    }
  }};

  &:hover {
    box-shadow: 0 0 1px 0px ${(props) => {
      switch (props.variant) {
        case 'lightBrown':
        case 'darkBrown':
          return props.theme.color.brown
        case 'beige':
          return props.theme.color.white
        default:
          return props.theme.color.brown
      }
    }
  };

  &:active {
    filter: brightness(1.1);
  }
}
`

export const Button = withTheme(ButtonComponent);
