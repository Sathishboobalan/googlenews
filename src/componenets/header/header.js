import React from 'react';
import '../header/header.css'
import bar from '../images/bar.svg'
import ninedot from '../images/button-symbol-of-nine-dots.svg'
import Sidebar from '../sidebar/sidebar';
import GoogleLogin from 'react-google-login';



class Header extends React.Component{    
    constructor(props){
        super(props);
        this.state = {
            name : '',
            imageUrl: ''
        }
        this.timeout =  0;
    }
    responseGoogle = (response) => {
        console.log(response.profileObj);
        this.setState({
            imageUrl : response.profileObj.imageUrl
        })
    }
    
    doSearch(evt){
        var searchText = evt.target.value; // this is the search text
        if(this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.setState({name: searchText})
        }, 300);
      }
    render(){
        return(
            <div>
                <nav className='navbar navbar-expand-md fixed-top   '>
                    <div className='bar-icon-div ml-3'>
                        <img src={bar} alt='bar-icon' className='bar-icon'/>
                    </div>
                    <a className="navbar-brand ml-3" href="/">News Portal</a>
                    <div className='search-bar'>
                        {console.log(this.state.imageUrl)}
                        <input type='search' className='search' onChange={evt => this.doSearch(evt)} placeholder='search for topic, location & sources' />
                        {/* {
                            this.state.name.length > 0
                            ?
                            <NewsFeed val={this.state.name} />
                            :
                            ""
                        } */}
                    </div>
                    <div className='content-nav-right'>
                        <div className='nine-dot-icon-div'>
                            <img src={ninedot} alt='ninedot' className='nine-dot-icon' />
                        </div>
                    </div>
                    <div className='content-nav-right-one'>
                        <div className='user-icon-div'>
                            {
                                this.responseGoogle.profileObj === undefined
                                ?
                                <GoogleLogin
                                    clientId="883822109887-s439qu1hhpbbtjr74tal9q72nh0lns10.apps.googleusercontent.com"
                                    buttonText="Login"
                                    onSuccess={this.responseGoogle}
                                    onFailure={this.responseGoogle}
                                    
                                />
                                :
                                <div>
                                    {console.log(this.state.imageUrl)}
                                    <img src={this.responseGoogle.profileObj.imageUrl} alt='googleimage' />
                                </div>
                                
                            }
                        
                        </div>
                    </div>
                    
                </nav>
                <Sidebar />

            </div>
        )
    }
}
export default Header;