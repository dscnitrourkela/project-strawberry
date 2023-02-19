import styled from 'styled-components'
import Button from './Typography/Button'

const ButtonContainer = styled.button`
  background: ${props => (props.cover ? '#FFDADA' : '#CB1313')};
  border: ${props => (props.cover ? '3px solid #CB1313' : 'none')};
  border: ${props =>
    props.cover
      ? props.small
        ? '1px solid #CB1313'
        : '3px solid #CB1313'
      : 'none'};
  color: ${props => (props.cover ? '#CB1313' : '#fff')};
  height: ${props => (props.small ? '50px' : '64px')};
  width: ${props => (props.small ? '120px' : '240px')};
  margin-right: ${props => (props.small ? '0px' : '36px')};
  border-radius: ${props => (props.small ? '4px' : '12px')};
  @media (max-width: 850px) {
    margin-right: 0px;
    height: ${props => (props.small ? '30px' : '40px')};
    width: ${props => (props.small ? '80px' : '160px')};
    margin-bottom: 12px;
  }
`

const Button1 = ({ cover = false, small = false, hidden = false }) => (
  <ButtonContainer cover={cover} small={small} hidden={hidden}>
    {/* <Link to={''}> */}
    <Button>Label</Button>
    {/* </Link> */}
  </ButtonContainer>
)
export default Button1
