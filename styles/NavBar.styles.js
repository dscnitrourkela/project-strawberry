import Link from 'next/link'
import styled from 'styled-components'
import tw from 'twin.macro'

/* Vanilla CSS properties */

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1b1e1f;
  padding: 0 32px;
  @media (max-width: 1024px) {
    padding: 0 25px 0 24px;
  }
  height: 80px;
  box-shadow: 2px 2px 6px rgba(255, 255, 255, 0.6);
  .open-nav {
    top: 80px;
    padding-top: 0px;
    @media (max-width: 1023px) {
      padding-top: 70px;
      height: 100vh;
      position: fixed;
    }
  }
  .closed-nav {
    top: -1080px;
    @media (max-width: 1023px) {
      height: 100vh;
    }
  }
`
export const NavLink = styled(Link)`
  color: white;
  transition-duration: 500ms;
  font-size: 16px;
  transition: 0.5s;
  display: inline-block;
  position: relative;
  padding-bottom: 5px;
  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #486ffd;
    box-shadow: 0px 0px 6px rgb(72, 111, 253);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 70%;
    left: 15%;
  }
`

export const StyledHamburger = styled.button`
  height: 2em;
  width: 2em;
  background: inherit;
  display: block;
  padding: 0.5em;
  border: 1px solid #fff;
  position: relative;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &::before,
  &::after {
    content: '';
    background: #fff;
    height: 2px;
    width: 100%;
    position: absolute;
    display: block;
    left: 0;
    transition: all 0.7s;
  }
  &:active,
  &:focus {
    outline-color: #fff;
  }
  &::before {
    top: ${({ menuOpen }) => (menuOpen ? '12px' : '8px')};
    transform: ${({ menuOpen }) => (menuOpen ? 'rotate(40deg)' : null)};
  }
  &::after {
    width: ${({ menuOpen }) => (menuOpen ? '100%' : '80%')};
    bottom: ${({ menuOpen }) => (menuOpen ? '12px' : '8px')};
    transform: ${({ menuOpen }) => (menuOpen ? 'rotate(-40deg)' : null)};
  }
  @media all and (min-width: 1023px) {
    display: none;
  }
`

/* Tailwind CSS */

export const Nav = styled.nav`
  ${tw`
    w-full
    fixed
    top-0
    left-0
    z-[100]
`}
`

export const LogoContainer = styled.div`
  ${tw`
    cursor-pointer
    flex
    items-center
`}
`

export const Logo = styled.img`
  ${tw`
    h-[80px]
`}
`

export const NavLinks = styled.ul`
  ${tw`
    flex
    flex-col
    lg:flex-row
    items-center
    justify-start
    lg:pb-0
    absolute
    lg:static
    bg-bg-primary
    lg:z-auto
    z-[-1]
    left-0
    w-full
    lg:w-auto
    lg:pl-0
    transition-all
    duration-[450ms]
    ease-in
`}
`

export const NavLinksContainer = styled.li`
  ${tw`
    list-none
    lg:ml-[8px]
    ml-0
    py-[16px]
    px-[32px]
    mb-[18px]
    lg:mb-[0]
`}
`
