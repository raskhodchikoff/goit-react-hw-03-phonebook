import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Label = styled.label`
  font-weight: ${p => p.theme.fontWeights[4]};
  font-size: ${p => p.theme.fontSizes[1]}px;
  color: orange;

  span {
    font-weight: ${p => p.theme.fontWeights[6]};
    font-size: ${p => p.theme.fontSizes[2]}px;
    color: ${p => p.theme.colors.greyBorder};
  }
`;

export const FormBox = styled(Form)`
  max-width: 240px;
  margin: 0 auto;
  padding: ${p => p.theme.space[4]}px;
  border: ${p => `${p.theme.borders.m} ${p.theme.colors.greyBorder}`};
  border-radius: ${p => p.theme.radii.m};
  box-shadow: ${p => p.theme.shadows.shadow};
`;

export const Input = styled(Field)`
  border: ${p => `${p.theme.borders.m} ${p.theme.colors.greyBorder}`};
  border-radius: ${p => p.theme.radii.s};
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  margin-top: ${p => p.theme.space[3]}px;
  padding: 3px;
  border: ${p => `${p.theme.borders.m} ${p.theme.colors.greyBorder}`};
  border-radius: ${p => p.theme.radii.s};
  box-shadow: ${p => p.theme.shadows.shadow};

  :hover {
    background-color: ${p => p.theme.colors.btnHover};
    color: ${p => p.theme.colors.blackFont};
  }
`;
