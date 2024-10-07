import React from 'react'
import { useMobileView } from '../../../libs/checkMobileView'
import { isMobile } from "react-device-detect";
import WhiteBlossomMobileTemplate from './mobile/WhiteBlossomMobileTemplate';
import WhiteBlossomWebTemplate from './web/WhiteBlossomWebTemplate';

const WhiteBlossomTemplate = () => {
 const mobileView = useMobileView();

 if (mobileView || isMobile) return <WhiteBlossomMobileTemplate />;
 else return <WhiteBlossomWebTemplate />;
}

export default WhiteBlossomTemplate