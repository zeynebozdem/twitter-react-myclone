import React, { Component } from 'react';
import styles from './profilebox.module.css'
import cn from 'classnames'

import Photo from './photo'
import TextBody from './text-body'
import Button from './button'
import {ArrowBottom} from './icons'

function ProfileBox({name="Zeynep Özdem",slug='zeyneppozdem'}) {
    return <Button className={cn([styles.box])}>
        <Photo/>
        <div className={styles.body}>
            <TextBody bold>{name}</TextBody>
            <TextBody className={styles.slug}>@{slug}</TextBody>
        </div>
        <ArrowBottom className={styles.icon}/>
    </Button>
}
export default ProfileBox