import React, { useState, useEffect, useCallback } from 'react'
import { Heading3, SectionLayout, Body2 } from '../shared'
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
  Underline,
  Container,
  Item,
  Heading,
} from '../../styles/speakers.styles'

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

function ItemContainer({ title, text, desig }) {
  return (
    <Item>
      <FrontBackground />
      <Img
        src="https://images.unsplash.com/photo-1511207538754-e8555f2bc187?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=88672068827eaeeab540f584b883cc66&auto=format&fit=crop&w=1164&q=80"
        alt=""
      />
      <TextBox>
        <h3>{title}</h3>
        <Designation>{desig}</Designation>
        <Body2>{text}</Body2>
      </TextBox>
    </Item>
  )
}

const PastSpeakers = () => {
  return (
    <SectionLayout>
      <Heading semibold>Past Speakers</Heading>
      <Underline />
      <Container>
        <Carousel>
          {Speakers.values.map(value => (
            <ItemContainer
              title={value.title}
              desig={value.desig}
              text={value.text}
            />
          ))}
        </Carousel>
      </Container>
    </SectionLayout>
  )
}

export default PastSpeakers
