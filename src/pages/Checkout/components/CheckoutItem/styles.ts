import styled from 'styled-components'

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  > img {
    height: 4rem;
  }

  & + & {
    padding-top: 1.5rem;
  }
`

export const ItemBody = styled.div`
  width: 100%;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    > span {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const ItemFooter = styled.footer`
  display: flex;
  gap: 0.25rem;

  > input {
    height: 2rem;
    width: 4.5rem;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-title']};
    padding: 0.5rem;
    text-align: center;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};
    text-transform: uppercase;
    border-radius: 6px;
    font-size: 0.75rem;
    border: 0;
    padding: 0.5rem;
    gap: 0.25rem;
    cursor: pointer;

    transition: background-color 0.1s;

    > svg {
      color: ${(props) => props.theme.purple};
    }
  }

  button:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
