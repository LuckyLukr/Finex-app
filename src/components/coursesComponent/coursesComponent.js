import './coursesStyles.css';

import prodImg from '../../images/vidProductionImg.png'

const courses = [
    {
        id: 0,
        name: 'Marketing',
        number: '10 Courses',
        href:'/'
    },
    {
        id: 1,
        name: 'Career Boost',
        number: '120 Courses',
        href:'/'
    },
    {
        id: 2,
        name: 'Good Grades',
        number: '340 Courses',
        href:'/'
    },
    {
        id: 3,
        name: 'Web development',
        number: '55 Courses',
        href:'/'
    },
    {
        id: 4,
        name: 'Business',
        number: '89 Courses',
        href:'/'
    }
]

function Courses({ onEmailChange, email, sendEmail }) {

    const handleSubmit = (e) => {
        e.preventDefault()
        sendEmail();
    };

    return (
        <div>
            <div className='coursesTitleContainer'>
                
                <span style={{color: 'rgb(222, 51, 68)'}}> {/* Local styling */}
                    What Can Offer Your?
                </span>

                <div className='coursesTitle'>
                    <h2 style={{marginTop: '0px'}}> {/* Local styling */}
                        Courses Collection
                    </h2>
                    <a className='menuBtn coursesLink' href='/'> {/* 'menuBtn' from navbarStyles.css */}
                        View All Courses
                    </a>
                </div>

            </div>

            <div className='coursesContainer'>
                {
                    courses.map( e => {
                    return (
                        <a key={e.id} href={e.href} style={{textDecoration: 'none'}}> {/* Local styling */}
                            <div className='course'>
                                <h3 className='courseText'>{e.name}</h3>
                                <span className='courseText'>{e.number}</span>
                                <img src={prodImg} alt='production_image' className='courseImg' />
                            </div>
                        </a>
                        )
                    })
                }
            </div>

            <div className='formContainer'>
                <form className='form' onSubmit={handleSubmit}>

                    <h3 className='formTitle'>
                        Get started instantly!
                    </h3>

                    <div className="module-border-wrap">
                        <div className ='inputContainer'>
                            <input 
                                 onChange={onEmailChange}
                                 value={email}
                                 name="email"
                                 required
                                 id="email"
                                 placeholder='Enter your email address...'
                            />

                            <button 
                                type='submit'
                                className='applyBtn inputBtn' /* 'applyBtn' from navbarStyles.css */
                            >
                                REQUEST A QUOTE
                            </button>
                        </div>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default Courses;