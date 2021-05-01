import { Fragment } from 'react';
import './aboutStyles.css';

function About() {

    const programArray = [
        {
            id: 1,
            name: 'programIcon process',
            title: 'Proven Process',
            text: 'Ut wisi enim ad minim veniam, quis laore nostrud exerci'
        },
        {
            id: 2,
            name: 'programIcon mentorship',
            title: 'Expert mentorship',
            text: 'Ut wisi enim ad minim veniam, quis laore nostrud exerci'
        },
        {
            id: 3,
            name: 'programIcon reprogram',
            title: 'Mental Reprogramming',
            text: 'Ut wisi enim ad minim veniam, quis laore nostrud exerci'
        },
    ]

    return(
        <div className='aboutContainer'>
            <div className='aboutInfo'>
                <span style={{color: '#de3344bf', fontSize: 13}}> {/* Local styling */}
                    About Us
                </span>
                <p style={{maxWidth: '500px', marginTop: '0px'}}> {/* Local styling */}
                    We are a fully in-house digital agency focusing branding,
                    marketng, web design and development with clients ranging
                    from start-ups to Fortune 100 companies.
                </p>
            </div>

            <div className='programMenu'>

                {
                    programArray.map( e => {
                    
                        const index = programArray.findIndex(x => x.id === e.id);

                        return (
                            <Fragment key={e.id}>
                                <div className='program'>
                                    <a href='/' >
                                        <div className='programHoverBg'>
                                            <div className='programBg'>
                                                <div className={e.name} />
                                            </div>
                                        </div>
                                    </a>

                                    <span className='programTitle'>{e.title}</span>
                                    <span className='programText'>{e.text}</span>
                                </div>

                                {   // Dividers ↓
                                    programArray.length !== 0 && programArray.length > index + 1 && <div className='divider' />
                                }
                            </Fragment>
                        )})
                }

            </div>
        </div>
    )
}

export default About;