import { styled } from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  gap: 3rem;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2.5rem 0;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-weight: 800;
    font-size: 3rem;
    filter: drop-shadow(${(props) => props.theme['base-hover']} 2px 4px 1px);
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;

    > img {
      width: 70%;
    }
  }
`

export const Items = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4.125rem 0;

  > div {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 1.25rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1.25rem;
    padding: 1rem 0;
  }
`

const ITEM_COLORS = {
  baseText: 'base-text',
  purple: 'purple',
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
} as const

interface ItemProps {
  itemColor: keyof typeof ITEM_COLORS
}

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  > div {
    height: 2rem;
    width: 2rem;
    border-radius: 999px;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme[ITEM_COLORS[props.itemColor]]};

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
