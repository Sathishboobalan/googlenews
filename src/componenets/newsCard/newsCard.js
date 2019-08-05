import React from 'react';
import '../newsCard/newsCard.css';
import NewsFeedHeader from '../news-feed-header/news-feed-header'
class Newscard extends React.Component{
    state = {
        categoryNews : [],
        category : '',
        limitNews : 0,
        isNewsAvailable : false,
        day : '',
        month : '',
        year: ''
    }
    componentDidMount(){
        const date =  new Date();
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear()
        console.log(day+' '+ month+" "+year)
        console.log(Object.values(this.props.news)[0])
        let lengthOfNews = Object.values(this.props.news)[0].length;
        let limit = 0;
        let newsAvailable = false;
        if(lengthOfNews > 5){
            limit = 5;
            newsAvailable = true;

        }else{
            limit = lengthOfNews;
            newsAvailable = true;
        }
        this.setState({
            categoryNews : Object.values(this.props.news)[0],
            category : this.props.category,
            limitNews : limit,
            isNewsAvailable: newsAvailable,
            day: day,
            month : month,
            year : year
            
        })


    }

    render(){
        return(
            <div>
                {
                    this.state.categoryNews !== undefined
                    ?
                    <div>
                        <NewsFeedHeader header={this.state.category} />
                        {
                            this.state.categoryNews.map((individualNews,newsIndex) => (
                                <div key={newsIndex}>
                                    {
                                        (newsIndex <= this.state.limitNews)
                                        ?
                                        <div className='card ml-3 news-card' >
                                                <div className='card-body'>
                                                <div className='row'>
                                                    <div className='col-10'>
                                                        {console.log(individualNews.url)}
                                                        <a  href={individualNews.url} target='_blank' className='news-title'>{
                                                            individualNews.title.length>100
                                                            ?
                                                            `${individualNews.title.substring(0,100)} ...`
                                                            :
                                                            individualNews.title
                                                            }
                                                        </a>
                                                        <li className= ' ml-2 about-news'>{individualNews.description}</li>
                                                        <div className='row news-content'>
                                                            <div className='col-10'>
                                                                <div className='row ml-1 below-content'>
                                                                    <div className='col-* source-name'>
                                                                        {individualNews.source.name}
                                                                    </div>
                                                                    <div className='col-* source-name published'>
                                                                        published at : {individualNews.publishedAt.substring(11,16)}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-2'>
                                                        <img alt='newsImage' src={individualNews.urlToImage} className='imageLink' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                        </div>
                                    }
                                </div>
                            ))
                        }
                    </div>
                    :
                    ""
                    
                }
            </div>
        )
    }
}
export default Newscard;