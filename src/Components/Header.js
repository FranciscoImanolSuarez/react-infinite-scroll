import React from 'react'
import styled from 'styled-components'

const Header = styled.header `
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
`

const H1 = styled.h1`
  font-family: 'Oswald', sans-serif;
  margin-bottom: 1em;
`;
export const Head = () => {
    return ( 
 <Header>
      <h1>Unsplash</h1>
      <p>The internet’s source of freely usable images.</p>
      <p>Powered by creators everywhere.</p>
    </Header>

    )
}