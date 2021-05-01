import './backgroundStyles.css';

import mainBg from '../../images/mainBg1.png';
import pinkBgBig from '../../images/pinkBgBig.png';
import pinkBgMedium from '../../images/pinkBgMedium.png';
import pinkBgSmall from '../../images/pinkBgSmall.png';
import lineBg from '../../images/lineBg1.png';

function Background() {

    return (
        <div className='backgroundContainer'>
            <div className='mainBgContainer'>
                <img src={mainBg} alt='main_background' className='background mainBg' />
                <img src={pinkBgBig} alt='pink_big_background' className='background pinkBigBg' />
                <img src={pinkBgMedium} alt='pink_medium_background' className='background pinkMediumBg' />
                <img src={pinkBgSmall} alt='pink_small_background' className='background pinkSmallBg' />
                <img src={lineBg} alt='line_background' className='background lineBg' />
            </div>
            <div className='footerBg'>
            </div>
        </div>
    )
}

export default Background;