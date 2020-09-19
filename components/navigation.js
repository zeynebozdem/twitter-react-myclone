import React, { Component } from 'react';

import NavigationButton from "./navigation-button"
import TextTitle from "./text-title"
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
                <TextTitle>Home</TextTitle>
            </NavigationButton>

            <NavigationButton selected={selectedKey === 'explore'}>
                <Explore/>
                <TextTitle>Explore</TextTitle>
            </NavigationButton>

            <NavigationButton selected={selectedKey === 'notification'}>
                <Notification/>
                <TextTitle>Notification</TextTitle>
            </NavigationButton>

            <NavigationButton notify={1} selected={selectedKey === 'messages'}>
                <Messages/>
                <TextTitle>Messages</TextTitle>
            </NavigationButton>

            <NavigationButton selected={selectedKey === 'bookmarks'}>
                <Bookmark/>
                <TextTitle>Bookmarks</TextTitle>
            </NavigationButton>

            <NavigationButton selected={selectedKey === 'lists'}>
                <Lists/>
                <TextTitle>Lists</TextTitle>
            </NavigationButton>

            <NavigationButton selected={selectedKey === 'profile'}>
                <Profile/>
                <TextTitle>Profile</TextTitle>
            </NavigationButton>

            <NavigationButton selected={selectedKey === 'more'}>
                <More/>
                <TextTitle>More</TextTitle>
            </NavigationButton>
        </nav>
    )
}

export default Navigation
