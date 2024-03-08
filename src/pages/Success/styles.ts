import styled from 'styled-components'

export const SuccessContainer = styled.div`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.25rem;

  > h1 {
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-dark']};
  }

  > h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 400;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 6.375rem;
    margin-top: 2.5rem;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`

export const Info = styled.div`
  width: 100%;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border: 2px solid ${(props) => props.theme.yellow};

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      display: block;
    }
  }
`

const ICON_COLORS = {
  purple: 'purple',
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
} as const

interface InfoIconProps {
  iconColor: keyof typeof ICON_COLORS
}

export const InfoIcon = styled.div<InfoIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  background-color: ${(props) => props.theme[ICON_COLORS[props.iconColor]]};
  color: ${(props) => props.theme.white};
  border-radius: 1000px;
`
