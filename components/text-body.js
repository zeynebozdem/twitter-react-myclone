import React from 'react'
import styles from './text-body.module.css'
import cn from 'classnames'
function TextBody({bold = false, children, ...props}) {
    return <span className={cn([styles.body, bold && styles.bold])} {...props}>{children}</span>
}
export default TextBody