import { Fragment } from 'react';
import './footerStyles.css';
import { footerMap } from './footerMap';

import logo from '../../images/logo.png';
import title from '../../images/title.png';

function Footer() {

    return (
        <footer className='footerContainer'>
            <div className='footerNav'>
                <div className='footerContact'>

                    <div className='footerLogo'>
                        <img src={logo} alt='logo' style={{margin: '1%'}} /> {/* Local styling */}
                        <img src={title} alt='title' style={{margin: '2%'}} /> {/* Local styling */}
                    </div>

                    <div className='subTextContainer'>
                        <span className='subText' >info@yourdomain.com</span>
                        <span className='subText'>(+08) 12345 6789</span>
                    </div>

                    <div className='subTextContainer'>
                        <span className='subText'>4010 Stokes Isle Apt. 179, Venaville, New York 12390, United States</span>
                    </div>

                    <div className='socialContainer'>

                        <a href='https://www.facebook.com/'>
                            <div className='iconBg'>
                                <div className='socialIcon fb'/>
                            </div>
                        </a>

                        <a href='https://twitter.com/'>
                            <div className='iconBg'>
                                <div className='socialIcon tw'/>
                            </div>
                        </a>

                        <a href='https://pinterest.com/'>
                            <div className='iconBg'>
                                <div className='socialIcon pint'/>
                            </div>
                        </a>

                        <a href='https://www.linkedin.com/'>
                            <div className='iconBg'>
                                <div className='socialIcon linked'/>
                            </div>
                        </a>

                    </div>
                </div>

                {   
                    footerMap.map( e => (
                        <Fragment key={e.id}>
                            <div className='footerNavLinks'>
                                <span className='footerNavTitle' >{e.name}</span>
                                {
                                    e.items.map( el => (
                                        <a key={el.id} href={el.href} className='footerNavLink'>
                                            {el.item}
                                        </a>
                                    ))
                                }
                            </div>
                        </Fragment>
                    ))
                }

            </div>

            <div className='footerBottom'>
                <div className='footerDivider' />
                <div className='footerBottomText'>
                    <span className='subText footText'>
                        Designed by <a href='https://thimpress.com' className='link' style={{color: '#de3344'}}> {/* Local styling */}
                                        ThimPress.
                                    </a> Powered by React.
                    </span>
                    
                    <span className='subText footText'>
                        <a href='/' className='link'>Terms of use</a>
                        <span> | </span>
                        <a href='/' className='link'>Privacy Environmenta</a>
                        <span> | </span>
                        <a href='/' className='link'>Policy</a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;