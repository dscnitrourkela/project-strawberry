import React, { useState, useEffect, useCallback } from 'react'
import { SectionLayout, Body2, Heading3 } from '../shared'
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs'

import { Speakers } from '../../config'

import {
  CarouselContainer,
  CarouserContainerInner,
  LeftCarouselButton,
  RightCarouselButton,
  CarouselItem,
  FrontBackground,
  Img,
  TextBox,
  Designation,
  Container,
  Item,
} from '../../styles/speakers.styles'
import SectionHeading from '../shared/SectionHeading'

// ArrowLeft
const ArrowLeft = () => (
  <p>
    <BsFillArrowLeftCircleFill />
  </p>
)

// ArrowRight
const ArrowRight = () => (
  <p>
    <BsFillArrowRightCircleFill />
  </p>
)

const getPrevElement = list => {
  const sibling = list[0].previousElementSibling

  if (sibling instanceof HTMLElement) {
    return sibling
  }

  // return list[0].parentElement.lastElementChild;
  return sibling
}

const getNextElement = list => {
  const sibling = list[list.length - 1].nextElementSibling

  if (sibling instanceof HTMLElement) {
    return sibling
  }

  // return list[0].parentElement.firstElementChild;
  return sibling
}

export function usePosition(ref) {
  const [prevElement, setPrevElement] = useState(null)
  const [nextElement, setNextElement] = useState(null)

  useEffect(() => {
    const element = ref.current

    const update = () => {
      const rect = element.getBoundingClientRect()

      const visibleElements = Array.from(element.children).filter(child => {
        const childRect = child.getBoundingClientRect()

        return rect.left <= childRect.left && rect.right >= childRect.right
      })

      if (visibleElements.length > 0) {
        setPrevElement(getPrevElement(visibleElements))
        setNextElement(getNextElement(visibleElements))
      }
    }

    update()
    element.addEventListener('scroll', update, { passive: true })

    return () => {
      element.removeEventListener('scroll', update, { passive: true })
    }
  }, [ref])

  const scrollToElement = useCallback(
    element => {
      const currentNode = ref.current

      if (!currentNode || !element) return

      let newScrollPosition

      newScrollPosition =
        element.offsetLeft +
        element.getBoundingClientRect().width / 2 -
        currentNode.getBoundingClientRect().width / 2

      console.log('newScrollPosition: ', newScrollPosition)

      currentNode.scroll({
        left: newScrollPosition,
        behavior: 'smooth',
      })
    },
    [ref],
  )

  const scrollRight = useCallback(
    () => scrollToElement(nextElement),
    [scrollToElement, nextElement],
  )

  const scrollLeft = useCallback(
    () => scrollToElement(prevElement),
    [scrollToElement, prevElement],
  )

  return {
    hasItemsOnLeft: prevElement !== null,
    hasItemsOnRight: nextElement !== null,
    scrollRight,
    scrollLeft,
  }
}

const Carousel = ({ children }) => {
  const ref = React.useRef()

  const { hasItemsOnLeft, hasItemsOnRight, scrollRight, scrollLeft } =
    usePosition(ref)

  return (
    <CarouselContainer>
      <CarouserContainerInner ref={ref}>
        {React.Children.map(children, (child, index) => (
          <CarouselItem key={index}>{child}</CarouselItem>
        ))}
      </CarouserContainerInner>
      <LeftCarouselButton hasItemsOnLeft={hasItemsOnLeft} onClick={scrollLeft}>
        <ArrowLeft />
      </LeftCarouselButton>

      <RightCarouselButton
        hasItemsOnRight={hasItemsOnRight}
        onClick={scrollRight}
      >
        <ArrowRight />
      </RightCarouselButton>
    </CarouselContainer>
  )
}

function ItemContainer({ title, desig, img }) {
  return (
    <Item>
      <FrontBackground />
      <Img src={img} alt="Past-Speaker-Image" />
      <TextBox>
        <Heading3>{title}</Heading3>
        <Designation>{desig}</Designation>
      </TextBox>
    </Item>
  )
}

const PastSpeakers = () => {
  return (
    <SectionLayout id="Speakers">
      <SectionHeading title={Speakers.title} width={286} />
      <Container>
        <Carousel>
          {Speakers.values.map(value => (
            <ItemContainer
              title={value.title}
              desig={value.desig}
              img={value.img}
            />
          ))}
        </Carousel>
      </Container>
    </SectionLayout>
  )
}

export default PastSpeakers
