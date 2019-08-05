import React from 'react';
import '../newsFeed/newsfeed.css'
import {Link} from 'react-router-dom';
class NewsFeedHeader extends React.Component{
    render(){
        return(
            <div>
                <div className='row'>
                        {console.log(this.props.header)}
                    <div className='col-6'>
                        <ul className='nav'>
                            <li className='nav-item' >
                                <div className='nav-link'>
                                    <p className='headline'>{this.props.header}</p>
                                </div>
                            </li>
                        </ul>

                    </div>
                    <div className='col-6'>
                        <ul className='nav' style={{float:"right"}}>
                            <Link className='nav-item' to={'/'+ this.props.header} >
                                <div className='nav-link'>
                                    <p className='more-headline'>More {this.props.header}</p>
                                </div>
                            </Link>
                        </ul>
                    </div>
                </div>
               
            </div>
        )
    }
}
export default NewsFeedHeader;