import React, { Component } from 'react';

import NavigationButton from "./navigation-button"
import TitleBold from "./title-bold"
import {Twitter, Home, Explore, Notification, Messages, Bookmark, Lists, Profile, More} from "./icons"
import styles from './navigation.module.css'

function Navigation({selectedKey}) {
    return (
        <nav className={styles.nav}>
            <NavigationButton>
                <Twitter/>
            </NavigationButton>

            <NavigationButton notify={176} selected={selectedKey === 'home'}>
                <Home/>
                <TitleBold>Home</TitleBold>
            </NavigationButton>

            <NavigationButton selected={selectedKey === 'explore'}>
                <Explore/>
                <TitleBold>Explore</TitleBold>
            </NavigationButton>

            <NavigationButton selected={selectedKey === 'notification'}>
                <Notification/>
                <TitleBold>Notification</TitleBold>
            </NavigationButton>

            <NavigationButton notify={1} selected={selectedKey === 'messages'}>
                <Messages/>
                <TitleBold>Messages</TitleBold>
            </NavigationButton>

            <NavigationButton selected={selectedKey === 'bookmarks'}>
                <Bookmark/>
                <TitleBold>Bookmarks</TitleBold>
            </NavigationButton>

            <NavigationButton selected={selectedKey === 'lists'}>
                <Lists/>
                <TitleBold>Lists</TitleBold>
            </NavigationButton>

            <NavigationButton selected={selectedKey === 'profile'}>
                <Profile/>
                <TitleBold>Profile</TitleBold>
            </NavigationButton>

            <NavigationButton selected={selectedKey === 'more'}>
                <More/>
                <TitleBold>More</TitleBold>
            </NavigationButton>
        </nav>
    )
}

export default Navigation
