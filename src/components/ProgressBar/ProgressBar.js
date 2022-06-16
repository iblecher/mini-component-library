/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: "8px",
    radius: "4px",
    padding: "0px"
  },
  medium: {
    height: "12px",
    radius: "4px",
    padding: "0px"
  },
  large: {
    height: "24px",
    radius: "8px",
    padding: "4px"
  }
}

const ProgressBar = ({ value, size }) => {
  return <Wrapper max={100} value={value} size={size} />;
};

const Wrapper = styled.progress`
  appearance: none;
  height: ${props => SIZES[props.size].height};
  position: relative;

  &::-webkit-progress-bar {
    background: ${COLORS.transparentGray15};
    border-radius: ${props => SIZES[props.size].radius};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    padding: ${props => SIZES[props.size].padding};
  }

  &::-webkit-progress-value {
    --borderRadius: ${props => Math.max(props.value - 96, 0) + "px"};
    background: ${COLORS.primary};
    border-radius: 4px var(--borderRadius) var(--borderRadius) 4px;
  }
`;

export default ProgressBar;
