import styled from 'styled-components'

export const RadioContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  > div {
    height: 3.1875rem;
    width: 100%;
    float: left;
    position: relative;
    cursor: pointer;

    > label {
      gap: 0.75rem;
    }

    label,
    input {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      cursor: pointer;
    }

    input[type='radio'] {
      opacity: 0.01;
      z-index: 100;
    }

    input[type='radio'] + label {
      background: ${(props) => props.theme['base-button']};
      color: ${(props) => props.theme['base-text']};
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      border-radius: 6px;
      font-size: 0.75rem;

      transition: background-color 0.1s;
    }

    input[type='radio']:not(:checked):hover + label {
      background: ${(props) => props.theme['base-hover']};
    }

    input[type='radio']:checked + label,
    .Checked + label {
      background: ${(props) => props.theme['purple-light']};
      border: 1px solid ${(props) => props.theme.purple};
    }

    > div label {
      padding: 5px;
      border: 1px solid #ccc;
      cursor: pointer;
      z-index: 90;
    }

    > div label:hover {
      background: #ddd;
    }
  }
`
