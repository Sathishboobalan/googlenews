import React from 'react'
import NewsCard from '../newsCard/newsCard'
import '../newsFeed/newsfeed.css';
import Weather from '../weather/weather';
import Loader from 'react-loader-spinner'



class NewsFeed extends React.Component {
    state = {
        isLoaded: false,
        news: [],
        category : []
    }
    componentDidMount() {
        this.setState( 
            () => {
            this.getCategeries();
        })

    }
    getCategeries() {
        let categories = this.getElement();        
        categories.then(result=>{
            this.setState({
                news : result,
                isLoaded : true
            })
        })
    }

    getElement() {
        const NewsAPI = require('newsapi');
        const newsapi = new NewsAPI('4fa4734825b04dd9b2b307e01d82d9db');
        let tempArray = []
        if(this.props.val === undefined){ 
            const allCategory = ['business', 'entertainment', 'health', 'science', 'sports', 'technology']
            this.setState({category:allCategory})
            return new Promise((resolve, reject) => {
                allCategory.forEach(element => {
                    newsapi.v2.topHeadlines({
                        category: element,
                        language: 'en',
                        country: 'in'
                    }).then(response => {
                        tempArray.push({
                        [element] :response.articles
                        })
                        if(tempArray.length===6){
                            resolve(tempArray);
                        }
                    });
                });
            })
        }
        else{
            return new Promise((resolve, reject) => {
                newsapi.v2.topHeadlines({
                    q : this.props.val,
                    category: 'general',
                    language: 'en',
                    
                }).then(response => {
                    tempArray.push(response.articles)
                    if(tempArray.length===1){
                        resolve(tempArray);
                    }
                });
            });
        }
    }
    render() {
        return (
            <div>
                {this.state.isLoaded
                    ?
                    <div>
                        <Weather />
                        <div className='news-feed'>
                            {
                                this.state.category.map((element,index) =>(
                                    <div key={index}>
                                        
                                        {
                                            this.state.news.map((categoryNews,indexVal) =>(
                                                <div key={indexVal}>
                                                     {
                                                        (Object.keys(categoryNews)[0] === element)
                                                        ?
                                                        <NewsCard news={categoryNews} category={element} />   
                                                        :
                                                        <div></div>   
                                                     }
                                                </div>
                                            ))
                                        }
                                    </div>
                                    
                                ))
                            }
                           
                        </div>
                    </div>
                    :
                    <div className='loader-of-page'>
                        <Loader  type="Bars" color="#1A73E9" height={80} width={80} />
                    </div>
                }
               
            </div>
        )
    }
}
export default NewsFeed;