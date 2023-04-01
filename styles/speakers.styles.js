import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
`
export const CarouselContainer = styled.section`
  margin-top: -75px;
  position: relative;
  overflow: hidden;
`

export const CarouselItem = styled.div`
  flex: 0 0 auto;
  margin-left: 1rem;
  margin-top: 55px;
  @media (max-width: 640px) {
    margin-left: 6px;
    margin-right: 6px;
  }
`

export const CarouserContainerInner = styled(Flex)`
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const CarouselButton = styled.button`
  position: absolute;
  cursor: pointer;
  top: 50%;
  z-index: 10;
  border-radius: 50%;
  border: none;
  padding: 0.5rem;
`

export const LeftCarouselButton = styled(CarouselButton)`
  left: 5px;
  display: ${({ hasItemsOnLeft }) => (hasItemsOnLeft ? `block` : `none`)};
  color: white;
  font-size: 50px;
  @media (max-width: 640px) {
    font-size: 20px;
  }
`

export const RightCarouselButton = styled(CarouselButton)`
  right: 5px;
  visibility: ${({ hasItemsOnRight }) => (hasItemsOnRight ? `all` : `hidden`)};
  color: white;
  font-size: 50px;
  @media (max-width: 640px) {
    font-size: 20px;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding: 25px 0px;
  height: 100%;
  width: 100%;
`

export const Item = styled.div`
  background-color: #131313;
  width: 400px;
  height: 400px;
  border-radius: 14px;
  transition: all 0.6s;
  &:hover {
    transform: translateY(-40px);
    box-shadow: 0px 0px 20px 2px #486ffd;
  }
  @media (max-width: 640px) {
    width: 150px;
    height: 200px;
  }
`

export const FrontBackground = styled.div`
  height: 100px;
  background-color: #486ffd;
  background-position: fixed;
  background-repeat: no-repeat;
  background-size: contain;
  text-align: center;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  @media (max-width: 640px) {
    width: 150px;
    height: 40px;
  }
`
export const Img = styled.img`
  margin: auto;
  width: 188px;
  height: 188px;
  border: solid #131313 4px;
  border-radius: 50%;
  margin-top: -50px;
  object-fit: cover;
  @media (max-width: 640px) {
    border: solid #131313 3px;
    margin-top: -25px;
    width: 80px;
    height: 80px;
  }
`
export const TextBox = styled.div`
  padding-top: 12px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Designation = styled.div`
  padding-top: 4px;
  padding-bottom: 36px;
  text-align: center;
  @media (max-width: 640px) {
    padding-bottom: 8px;
    font-size: 14px;
  }
`
