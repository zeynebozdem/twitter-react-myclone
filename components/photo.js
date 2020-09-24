import React, { Component } from 'react';
import styles from './photo.module.css'
import cn from 'classnames'

function Photo({src = "https://pbs.twimg.com/profile_images/1306553500168527875/rwCC7Hez_400x400.jpg", alt, children}) {
    return <div className={cn([styles.photo])}>
        <img className={styles.img} src={src} alt={alt}/>
    </div>
}
export default Photo