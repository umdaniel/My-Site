import React from 'react'

import { MdDesktopMac } from 'react-icons/md';
import PText from './PText';

export default function ServiceSectionItem() {
    return (
        <div>
            <div className="servicesItem__icon">
                <MdDesktopMac />
                <div className="servicesItem__title">
                    Web Design
                </div>
                <PText>
                    Web Development
                </PText>
            </div>
        </div>
    );
}
