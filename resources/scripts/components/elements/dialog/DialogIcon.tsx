import React, { useContext, useEffect } from 'react';
import {
    CheckIcon,
    ExclamationIcon,
    InformationCircleIcon,
    ShieldExclamationIcon,
} from '@heroicons/react/outline';
import classNames from 'classnames';
import { DialogContext, DialogIconProps, styles } from './';

const icons = {
    danger: ShieldExclamationIcon,
    warning: ExclamationIcon,
    success: CheckIcon,
    info: InformationCircleIcon,
};

export default ({ type, position, className }: DialogIconProps) => {
    const { setIcon, setIconPosition } = useContext(DialogContext);

    useEffect(() => {
        const Icon = icons[type];

        setIcon(
            <div className={classNames(styles.dialog_icon, styles[type], className)}>
                <Icon className={'w-6 h-6'} />
            </div>,
        );
    }, [
        type,
        className,
        Icon,
        icons,
        setIcon,
        div,
        classNames,
        styles,
        dialog_icon
    ]);

    useEffect(() => {
        setIconPosition(position);
    }, [position, setIconPosition]);

    return null;
};
