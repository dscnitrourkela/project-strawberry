import Link from 'next/link'
import styled from 'styled-components'
import tw from 'twin.macro'

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1b1e1f;
  padding: 0 32px;
  @media (max-width: 1024px){
    padding: 0 25px 0 24px;
  }
  height: 80px;
  box-shadow: 2px 2px 6px rgba(255, 255, 255, 0.6);
  .open-nav {
    top: 80px;
    padding-top: 0px;
    @media (max-width: 1024px) {
      padding-top: 70px;
      height: 100vh;
    }
  }
  .closed-nav {
    top: -490px;
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
  &:after{
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
  &:hover:after{
    width: 100%;
    left: 0;
  }
`

export const Nav = styled.nav`
  ${tw`
    w-full
    relative
    top-0
    left-0
    z-[10]
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

export const HamburgerContainer = styled.div`
  ${tw`
    absolute
    right-8
    cursor-pointer
    lg:hidden
    h-full
    flex
    items-center
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
    duration-500
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