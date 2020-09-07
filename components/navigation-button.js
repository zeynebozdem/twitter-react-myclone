import React, { Component } from 'react';

import Button from "./button"
import styles from './navigation-button.module.css'
import cn from 'classnames'

function NavigationButton({notify, selected, children, ...props}) {
    return (
        <Button type="button" className={cn(styles.navButton, selected && styles.navButtonSelected)} {...props}>
            {children}
        {notify && <span className={styles.notify}>{notify}</span>}
        </Button>
    )
}

export default NavigationButton
