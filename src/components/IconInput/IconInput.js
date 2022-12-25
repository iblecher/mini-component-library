import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    border: 1,
    size: 14,
    paddingBottom: 4,
    paddingLeft: 16,
    icon: 16,
  },
  large: {
    border: 2,
    size: 18,
    paddingBottom: 7,
    paddingLeft: 24,
    icon: 20,
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = STYLES[size];

  return <Wrapper>
    <IconWrapper id={icon} size={styles.icon + "px"}
                 style={{"--icon": styles.icon + "px",
                        "--height": (styles.icon + styles.paddingBottom - styles.border) + "px"}} />
    <InputWrapper placeholder={placeholder}
                  style={{"--border": styles.border + "px",
                          "--size": styles.size + "px",
                          "--padding-bottom": styles.paddingBottom + "px",
                          "--padding-left": styles.paddingLeft + "px",
                          "--width": width + "px",
                          "--icon": styles.icon + "px",
                        }}
    />
    <VisuallyHidden>{label}</VisuallyHidden>
  </Wrapper>;
};

const Wrapper = styled.span`
  position: relative;
  --text-color: ${COLORS.gray700};
  --placeholder-color: ${COLORS.gray500};

  color: var(--text-color);
  
  &:hover {
    --text-color: ${COLORS.black};
    --placeholder-color: ${COLORS.gray700};
  }
`;

const IconWrapper = styled(Icon)`
  display: inline-block;
  position: absolute;
  inset: 0;
  margin: auto 0;
  height: var(--height);
  pointer-events: none;
`;

const InputWrapper = styled.input`
  appearance: none;
  border: none;
  border-bottom: solid var(--border) ${COLORS.black};
  padding-bottom: var(--padding-bottom);
  color: inherit;
  font-weight: 700;
  font-size: var(--size);
  width: var(--width);
  padding-left: var(--padding-left);
  
  &::placeholder {
    color: var(--placeholder-color);
    font-weight: 400;
  }
  
  &:focus {
    outline-offset: 2px;
  }
`;

export default IconInput;
