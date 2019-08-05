import React from 'react';
import '../custom/custom.css'
import IndividualNewsCard from '../individualNewsCard/individualNewsCard';
import Loader from 'react-loader-spinner'
import emoj from '../images/emoj.png'


class Custom extends React.Component{
    state = {
        isLoaded: false,
        individualNews: []
    }
    componentDidMount() {
        console.log(this.props.value)
        let categories = this.getElement();   
        console.log(categories)     
        categories.then(result=>{
            this.setState({
                
                individualNews : result,
                isLoaded : true
            })
        })

    }

    getElement() {
        const NewsAPI = require('newsapi');
        const newsapi = new NewsAPI('4fa4734825b04dd9b2b307e01d82d9db');;
        const categoryNews = this.props.value;
        if(categoryNews === 'technology'){
           
            let tempArray = []
            return new Promise((resolve, reject) => {
                newsapi.v2.topHeadlines({
                    category : categoryNews,
                    language: 'en',
                    country : 'in',
                    pageSize : 100
                }).then(response => {
                    tempArray.push( response.articles)
                    if(tempArray.length===1){
                        resolve(tempArray);
                    }
                });
            });
        }
        else{
            let tempArray = []
            return new Promise((resolve, reject) => {
                newsapi.v2.topHeadlines({
                    q :this.props.value,
                    category : 'general',
                    language: 'en',
                    pageSize : 100
                }).then(response => {
                    tempArray.push( response.articles)
                    if(tempArray.length===1){
                        resolve(tempArray);
                    }
                });
            });
        }
       
        // console.log(this.props.value)
        // const catogory = this.props.value
        // return newsapi.v2.topHeadlines({
        //     q: catogory,
        //     language: 'en',
        //     pageSize: 100,
        // });
        
    }
    render(){
        return(
            <div>
                {
                    this.state.individualNews[0] !== undefined
                    ?
                    <div>
                        {console.log(this.props.value)}
                        {
                            this.state.individualNews[0].length === 0
                            ?
                            <div className='no-data'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <img src={emoj} className='sorry-image' alt='errorimg' />
                                    </div>
                                    <div className='no-data-content'>
                                        <h3 className=''>Sorry No Data Found</h3>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            :
                            <div>
                                 <div className='row individual-head'>
                                    <div className='col-4'>
                                        <div className='col-*'>
                                            <img src={this.props.img} alt='categoryimage' className='category-logo' /><span className='category-name ml-4'> {this.props.value}</span>
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div style={{float:'right'}}> 
                                            <button className='btn btn-sm follow-like-btn'><i className="far fa-star"></i> Follow</button>
                                            <button className='btn btn-sm follow-like-btn'><i className="fas fa-share-alt"></i> Share</button>
                                        </div>
                                    </div>
                                </div>
                                {
                                    
                                    // this.state.individualNews[0].map((element,index) => (
                                    //     <div key={index}>
                                    //         {console.log(element)}
                                    //     </div>
                                    // ))
                                    // console.log(this.state.individualNews[0].)
                                    this.state.individualNews[0].map((element,index) => (
                                        <div key={index}>
                                            <IndividualNewsCard news={element} />
                                        </div>
                                    ))
                                }
                            </div>
                            
                        }
                       
                        
                    </div>
                    :
                    <div className='loader-of-page'>
                        <Loader  type="ThreeDots" color="#1A73E9" height={80} width={80} />
                    </div>
                    
                }
               
            </div>
        )
    }
}
export default Custom;