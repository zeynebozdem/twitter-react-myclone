import React from 'react';
import Button from "../components/button"
import NavigationButton from "../components/navigation-button"
import ThemeButton from "../components/theme-button"
import Navigation from "../components/navigation"
import { Home } from '../components/icons'
import TextTitle from '../components/text-title'

export default {
    title: 'Buttons'
}

export const Normal = () => (
    <Button>Save</Button>
);
export const Theme = () => (
    <div>
        <ThemeButton>Save</ThemeButton>
        <ThemeButton full>Save Full</ThemeButton>
    </div>
);
export const NavButton = () => (
    <NavigationButton>
         <Home/>
        <TextTitle>Home</TextTitle>
    </NavigationButton>
);
export const Nav = () => (
    <Navigation selectedKey="home"/>
);
