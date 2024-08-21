import styled from 'styled-components'

const StyledKeymetrics = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  column-gap: 32px;
  width: 100%;

  .keymetrics {
    &-icon {
      width: 32px;
      height: 32px;
      border-radius: 0.5rem;
    }

    &-info {
      display: flex;
      flex-flow: column nowrap;
      row-gap: 8px;
    }

    &-value {
      font-weight: 700;
      font-size: 24px;
      color: #282d30;
    }

    &-name {
      font-weight: 500;
      font-size: 24px;
      color: #74798c;
    }
  }
`

export default function KeyMetrics(props) {
  return (
    <StyledKeymetrics className="keymetrics">
      <img className="keymetrics-icon" src={props.icon} alt="Keymetrics icon" />
      <div className="keymetrics-info">
        <p className="keymetrics-value">{props.value}</p>
        <p className="keymetrics-name">{props.name}</p>
      </div>
    </StyledKeymetrics>
  )
}
