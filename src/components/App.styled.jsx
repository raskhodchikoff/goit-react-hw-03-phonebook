import styled from 'styled-components';

export const MainTitle = styled.h1`
  text-align: center;
  margin-bottom: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.blackFont};
  font-size: ${p => p.theme.fontSizes[5]}px;
`;

export const ContactsTitle = styled.h2`
  text-align: center;
  margin-bottom: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.blackFont};
  font-size: ${p => p.theme.fontSizes[4]}px;
`;
