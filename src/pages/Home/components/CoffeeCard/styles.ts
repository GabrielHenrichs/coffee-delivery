import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 2.5rem 0;

  background: ${(props) => props.theme['base-card']};
  width: 256px;
  height: 310px;
  padding: 1.5rem;

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 36px;

  > img {
    margin-top: calc(0px - 1.5rem - 20px);
  }
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 0.5rem;

  > span {
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    text-transform: uppercase;
    font-size: 0.625rem;
    font-weight: 700;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    white-space: nowrap;
    text-align: center;
  }
`

export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  > strong {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
  }

  > span {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    text-align: center;
  }
`

export const CardFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > span {
    > strong {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 1.5rem;
    }
  }

  > form {
    display: flex;
    gap: 0.5rem;

    input {
      height: 2.375rem;
      width: 4.5rem;
      border-radius: 6px;
      border: 0;
      background: ${(props) => props.theme['base-button']};
      color: ${(props) => props.theme['base-title']};
      padding: 0.5rem;
      text-align: center;
    }

    button {
      background: ${(props) => props.theme['purple-dark']};
      color: ${(props) => props.theme.white};
      border: 0;
      padding: 0 0.5rem;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
`
