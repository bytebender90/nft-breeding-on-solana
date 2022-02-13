import React, { useState, useEffect } from 'react';
import withStyles from './styles';
interface ToastInterface {
    classes: any;
    icon: any;
    description: string;
  }

const Toast = (props: ToastInterface) => {
    const { classes, icon, description} = props;
    return (
        <>
            <div className={classes.notificationContainer}>
                <div 
                    className={classes.notificationToast}
                >
                    <button>
                        X
                    </button>
                    <div className={classes.notificationImage}>
                        <img src={icon} alt="" />
                    </div>
                    <div>
                        <p className={classes.notificationMessage}>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withStyles(Toast);