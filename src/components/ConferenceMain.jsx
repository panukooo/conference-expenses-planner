import React, {useState} from 'react';
import WelcomePage from './WelcomePage';
import ProductsPage from './ProductsPage';

const ConferenceMain = () => {
    let [isOnWelcomePage, setIsOnWelcomePage] = useState(true);

    const handleNavigation = (isOn) => {
        setIsOnWelcomePage(!isOn);
    }

    return(
        <>
            {isOnWelcomePage ? <WelcomePage handleNav={handleNavigation}/> : <ProductsPage handleNav={handleNavigation} />}
        </>
    );
}

export default ConferenceMain;