import './sidemenuStyles.css';

function Sidemenu( {onOpen} ) {

    return (
        <div className='sidebarContainer'>
            <div className="sidebar">
                <a href='/'>Home</a>
                <a href="/">About</a>
                <a href="/">Courses</a>
                <a href="/">Events</a>
                <a href="/">Blog</a>
                <a href="/">Contact</a>
            </div>
            <div className='darkField' onClick={() => onOpen()} />
        </div>
    )
}

export default Sidemenu;