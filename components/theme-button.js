import React, { Component } from 'react';

import Button from "./button"
import styles from './theme-button.module.css'
import cn from 'classnames'

function ThemeButton({className, children, ...props}) {
    return (
        <Button type="button" className={cn(styles.button,className)} {...props}>
            {children}
        </Button>
    )
}

export default ThemeButton
