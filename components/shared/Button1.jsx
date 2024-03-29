import styled from 'styled-components'
import Button from './Typography/Button'

const ButtonContainer = styled.button`
  background: ${props => (props.cover ? '#1B1E1F' : '#486FFD')};
  border: ${props => (props.cover ? '3px solid #486FFD' : 'none')};
  border: ${props =>
    props.cover
      ? props.small
        ? '1px solid #486FFD'
        : '3px solid #486FFD'
      : 'none'};
  color: ${props => (props.cover ? '#486FFD' : '#fff')};
  height: ${props => (props.small ? '50px' : '64px')};
  width: ${props => (props.small ? '120px' : '240px')};
  margin-right: ${props => (props.small ? '0px' : '36px')};
  border-radius: ${props => (props.small ? '4px' : '12px')};
  :hover {
    transform: scale(1.05);
    transition: all 300ms ease;
  }
  @media (max-width: 850px) {
    margin-right: 0px;
    height: ${props => (props.small ? '30px' : '40px')};
    width: ${props => (props.small ? '80px' : '160px')};
    margin-bottom: 12px;
  }
`

const Button1 = ({ cover = false, small = false, hidden = false, children }) => (
  <ButtonContainer cover={cover} small={small} hidden={hidden}>
    {/* <Link to={''}> */}
    <Button>{children}</Button>
    {/* </Link> */}
  </ButtonContainer>
)
export default Button1
