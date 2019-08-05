import React from 'react';
import '../individualNewsCard/individualNewsCard.css'

class IndividualNewsCard extends React.Component{
    render(){
        return(
            <div>
                 
                {console.log((this.props.news))}
                {
                    this.props.news !== undefined
                    ?
                    <div>
                       
                        <div className='card individual-news-card'>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-10'>
                                        <div className='col-12'>
                                                    <a className='news-title' href={this.props.news.url} target='_blank' >{
                                                this.props.news.title.length > 100
                                                ?
                                                `${this.props.news.title.substring(0,100)} ... `
                                                :
                                                this.props.news.title
                                            }</a>
                                        </div>
                                        <div className='col-12'>
                                            <li className='individual-news-content ml-4'>{this.props.news.content}</li>
                                        </div>
                                        <div className='col-12 ml-4'>
                                            <div className='row ml-1 below-content-individual'>
                                                <div className='col-* source-name'>
                                                    {this.props.news.source.name}
                                                </div>
                                                <div className='col-* source-name published'>
                                                    published at : {this.props.news.publishedAt.substring(11,16)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-2'>
                                        {
                                            this.props.news.urlToImage === null
                                            ?
                                            ""
                                            :
                                            <img className='news-img' src={this.props.news.urlToImage} alt='news-img'/>
                                        }
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>  
                    :
                    ""
                }
                
            </div>
        );
    }
}
export default IndividualNewsCard;