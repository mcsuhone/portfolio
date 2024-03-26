import React, { useState } from 'react'
import styled from 'styled-components'
import { theme } from './theme'
import { TextBox } from './components/TextBox'

const ContentContainer = styled.div`
  position: absolute;
  top: 0;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 20%;
  row-gap: 1000px;
`

const Space = styled.div`
  width: 100%;
  margin-bottom: 20000px;
`

interface IAppProps {
  scrollPosition: Number
}

const App: React.FC<IAppProps> = ({ scrollPosition }) => {
  return (
    <Space>
      <ContentContainer>
        <TextBox>
          <h2>otsikko</h2>
          <p>liirum laarum tekstiä...</p>
        </TextBox>
        <TextBox>
          <h2>otsikko</h2>
          <p>liirum laarum tekstiä...</p>
        </TextBox>
        <TextBox>
          <h2>otsikko</h2>
          <p>liirum laarum tekstiä...</p>
        </TextBox>
      </ContentContainer>
    </Space>
  )
}

export default App
