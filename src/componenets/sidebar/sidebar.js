import React from 'react';
import '../sidebar/sidebar.css';
import {NavLink} from 'react-router-dom';



class Sidebar extends React.Component{
    // state = {
    //     navActive : '',
    //     linkActive : ''
    // }
    // toggleBox = () => {
    //     this.setState( prevState => ({
    //         navActive : prevState.navActive === 'nav-item-active' ? "": 'nav-item-active',
    //         linkActive : prevState.linkActive === 'nav-link-active'?'':'nav-link-active'
    //     }))
    // }
    render(){
        return(
            <div>   
                <div className='side-bar'>
                    <div className='row'>
                        <div className='col-12'>
                            <ul className='nav'>
                                <NavLink activeClassName="nav-item-active" className={`nav-item`} exact to='/'>
                                    <div className={`nav-link`} >
                                        <i className="fas fa-newspaper"></i>
                                        <span className='ml-2 mb-2 side-nav-heading'> Top Stories</span>
                                    </div>
                                </NavLink>
                                <NavLink activeClassName="nav-item-active" className={`nav-item`} exact to='/foryou' >
                                    <div className={`nav-link`} >
                                        <i className="fas fa-user-alt"></i>
                                        <span className='ml-2 mb-2 side-nav-heading'> For You</span>
                                    </div>
                                </NavLink>
                                <NavLink activeClassName="nav-item-active" className={`nav-item`} exact to='/favourites'>
                                    <div className={`nav-link `}>
                                        <i className="far fa-star"></i>
                                        <span className='ml-2 mb-2 side-nav-heading'> Favourites</span>
                                    </div>
                                </NavLink>
                                <NavLink activeClassName="nav-item-active" className={`nav-item `} exact to='/savedsearch'>
                                    <div className={`nav-link`} >
                                        <i className="fas fa-search"></i>
                                        <span className='ml-2 mb-2 side-nav-heading'> Saved Search</span>
                                    </div>
                                </NavLink>
                            </ul>
                            <hr />
                            <ul className='nav'>
                                <NavLink activeClassName="nav-item-active" className={`nav-item `} exact to='/india'>
                                    <div className={`nav-link`}>
                                        <i className="fas fa-flag"></i>
                                        <span className='ml-2 mb-2 side-nav-heading'> India News</span>
                                    </div>
                                </NavLink>
                                <NavLink activeClassName="nav-item-active" className={`nav-item `} exact to='/world'>
                                    <div className={`nav-link`}>
                                        <i className="fas fa-globe-americas"></i>
                                        <span className='ml-2 mb-2 side-nav-heading'> World</span>
                                    </div>
                                </NavLink>
                                <NavLink activeClassName="nav-item-active" className={`nav-item `} exact to='/local'>
                                    <div className={`nav-link`} >
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span className='ml-2 mb-2 side-nav-heading'> Local Stories</span>
                                    </div>
                                </NavLink>
                                <NavLink activeClassName="nav-item-active" className={`nav-item `} exact to='/business'>
                                    <div className={`nav-link`}>
                                        <i className="fas fa-city"></i>
                                        <span className='ml-2 mb-2 side-nav-heading'> Business</span>
                                    </div>
                                </NavLink>
                                <NavLink  activeClassName="nav-item-active" className={`nav-item `} exact to='/technology'>
                                    <div className={`nav-link`} >
                                        <i className="fas fa-microchip"></i>
                                        <span className='ml-2 mb-2 side-nav-heading'> Technology</span>
                                    </div>
                                </NavLink>
                                <NavLink activeClassName="nav-item-active" className={`nav-item `} exact to='/entertainment'>
                                    <div className={`nav-link`}>
                                        <i className="fas fa-film"></i>
                                        <span className='ml-2 mb-2 side-nav-heading'> Entertainment</span>
                                    </div>
                                </NavLink>
                                <NavLink activeClassName="nav-item-active" className={`nav-item`} exact to='/sports'>
                                    <div className={`nav-link`} >
                                        <i className="fas fa-biking"></i>
                                        <span className='ml-2 mb-2 side-nav-heading'> Sports</span>
                                    </div>
                                </NavLink>
                                <NavLink activeClassName="nav-item-active" className={`nav-item`} exact to='/science'>
                                    <div className={`nav-link`} >
                                        <i className="fas fa-flask"></i>
                                        <span className='ml-2 mb-2 side-nav-heading'> Science</span>
                                    </div>
                                </NavLink>
                                <NavLink activeClassName="nav-item-active" className={`nav-item `} exact to='/health'>
                                    <div className={`nav-link`}>
                                        <i className="fas fa-dumbbell"></i>
                                        <span className='ml-2 mb-2 side-nav-heading'> Health</span>
                                    </div>
                                </NavLink>
                            </ul>
                            <hr></hr>
                            <ul className='nav'>
                                <li className='nav-item'>
                                    <a className='nav-link' href='/'>
                                        <p className='ml-2 side-nav-bottom-content'>Language & region</p>
                                        <p className='ml-2 side-nav-bottom-sub-content'>English (India)</p>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='/'>
                                        <span className='ml-2 mb-2 side-nav-bottom-content side-nav-heading'> Settings</span>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='/'>
                                        <span className='ml-2 mb-2 side-nav-bottom-content side-nav-heading'> Get the Android App</span>
                                        <i className="fas fa-external-link-alt"></i>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='/'>
                                        <span className='ml-2 mb-2 side-nav-bottom-content side-nav-heading'> Get the iOS App</span>
                                        <i className="fas fa-external-link-alt"></i>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='/'>
                                        <span className='ml-2 mb-2 side-nav-bottom-content side-nav-heading'> Sent Feedback</span>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='/'>
                                        <span className='ml-2 mb-2 side-nav-bottom-content side-nav-heading'>Help</span>
                                        <i className="mr-2 fas fa-external-link-alt"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Sidebar;