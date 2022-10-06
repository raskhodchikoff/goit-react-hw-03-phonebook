import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes[2]}px;
  color: ${p => p.theme.colors.greyBorder};

  input {
    width: 160px;
    border: ${p => `${p.theme.borders.m} ${p.theme.colors.greyBorder}`};
    border-radius: ${p => p.theme.radii.s};
  }
`;
