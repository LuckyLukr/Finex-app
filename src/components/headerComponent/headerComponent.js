import './headerStyles.css';

import mainImg from '../../images/mainImg.png';

function Header( {onPlay} ) {
    return (
        <div className='headerContainer'>
            <div className='infoContainer'>

                <div>
                    <p style={{color: '#de3344'}}> {/* Local styling */}
                        70% Off for first 3 months
                    </p>

                    <h1>The #1 Platform to Learn Stock Trading</h1>

                    <p style={{color: 'grey', fontSize: '15px'}}> {/* Local styling */}
                        We provide marketing services to startups and small and Shareyor challenge 
                        with our team and we'll work a set with you to deliver a revolutionary digital product.
                    </p>
                </div>

                <div className='infoButtonGroup '>
                    <button className='applyBtn' > {/* Styles imported from navbarStyles.css */}
                        GETTING STARTED
                    </button>

                    <button className='menuBtn watchBtn' onClick={()=> onPlay()}>
                        Watch Video ▶
                    </button>

                </div>

            </div>
            
            <div className='imgContainer'>
                <img src={mainImg} alt='graph_img' className='mainImg' />
            </div>
        </div>
    )
}

export default Header;