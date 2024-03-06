import styled from 'styled-components'

export const HomeContainer = styled.main`
  > div > h2 {
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`
