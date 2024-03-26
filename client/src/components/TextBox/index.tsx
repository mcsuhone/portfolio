import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'

const TextBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.light};
  padding: 20px 40px;
  margin: 20px;
  border-radius: 7px;
`

export const TextBox: React.FC<PropsWithChildren> = ({ children }) => {
  return <TextBoxContainer>{children}</TextBoxContainer>
}
