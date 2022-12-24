import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
      <Wrapper>
        <span>{displayedValue}</span>
        <IconWrapper id="chevron-down" style={{"--size": "24px"}} />
        <SelectWrapper value={value} onChange={onChange}>
          {children}
        </SelectWrapper>
      </Wrapper>
  );
};

const SelectWrapper = styled.select`
  position: absolute;
  inset: 0;
  appearance: none;
  border: none;
  opacity: 0;
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  color: ${COLORS.gray700};
  display: inline-block;
  margin: auto;
`;

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  padding: 12px 48px 12px 16px;
  border-radius: 8px;
  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  border-radius: 8px;
  border: 2px solid transparent;

  &:hover {
    color: ${COLORS.black};
  }
  
  &:hover ${IconWrapper} {
    color: ${COLORS.black};
  }
  
  &:focus-within {
    border-color: ${COLORS.primary};
  }
`;




export default Select;
