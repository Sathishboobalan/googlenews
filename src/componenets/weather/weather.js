import React from 'react';
import '../weather/weather.css';

class Weather extends React.Component {
    state = {
        isLoaded: false,
        weather: [],
        type : 'c'
    }
    dayOfTheWeek(date){
        console.log(date)
        const year = date.substring(0,4);
        const month = date.substring(6,7);
        const day = date.substring(8,10);
        var dayOfWeek = require('day-of-week').get
        dayOfWeek(new Date(year, month, day), 'Asia/kolkata')
        console.log(dayOfWeek)
        return dayOfWeek;
    }
    componentDidMount() {
        const listOfWeather = this.getWeather()
        listOfWeather.then(result => {
            this.setState({
                weather: result,
                isLoaded: true,
                day : ['Thu','Fri','Sat','Sun','Mon','Tue','Wed']
            })
        })

    }
    TypeChange(input){
        this.setState({
            type : input
        })
    }
    getWeather() {
        let tempArray = []
        const axios = require('axios');
        return new Promise((resolve, reject) => {
            axios.get('http://api.apixu.com/v1/forecast.json?key=9923ae5617724bb594d124738192607&q=Bangalore&days=5')
                .then(function (response) {
                    // handle success
                    console.log(response.data);
                    tempArray.push(response.data)
                    resolve(tempArray)
                })
        })
    }
    render() {
        return (
            <div>{console.log(this.state.weather)}
                <div className='card card-weather rounded'>
                    <div className='card-body '>
                        {this.state.weather[0] !== undefined 
                        ?
                        <div>
                            <h6 className='weather-city'>{this.state.weather[0].location.name}</h6> 
                            <hr className='hr-line-weather-card'/>
                            <div className='row'>
                                <div className='col-6'>
                                    <h6 className='weather-condition'>{this.state.weather[0].current.condition.text}</h6>
                                    {
                                        this.state.type === 'c'
                                        ?
                                        <h4 className='weather-report'>{this.state.weather[0].current.temp_c}&deg; c</h4>
                                        :
                                        this.state.type === 'k'
                                        ?
                                        <h4 className='weather-report'>{this.state.weather[0].current.temp_c + 273}&#8490;</h4>
                                        :
                                        <h4 className='weather-report'>{this.state.weather[0].current.temp_f }	&#8457;</h4>
                                    }
                                    
                                </div>
                                <div className='col-6 text-center'>
                                    <img src={this.state.weather[0].current.condition.icon} alt='weather-icon'  className='big-weather-icon'/>
                                </div>
                            </div>
                            <div className='row forecast-list'>
                                        <div className='col-*'>
                                            <div className='row'>
                                                {
                                                    this.state.type === 'c'
                                                    ?
                                                    this.state.weather[0].forecast.forecastday.map((element,index) =>(
                                                        index === 0 
                                                        ?
                                                        <div className='text-left' key={index}>
                                                            <div className='col-12 forecast-day' >Today</div>
                                                            <div className='col-12'><img src={element.day.condition.icon} alt='weather-icon' /></div>
                                                            <div className='col-12 max-temp'>{element.day.maxtemp_c}	&#8451;</div>
                                                            <div className='col-12 min-temp'>{element.day.mintemp_c}	&#8451;</div>
                                                        </div>
                                                        :
                                                        <div style={{marginLeft:'-15px'}} key={index}>
                                                            <div className='col-12 forecast-day'>{this.state.day[require("day-of-week").get(new Date(element.date.substring(0,4),element.date.substring(5,7),element.date.substring(8,10)))]}</div>
                                                            {console.log(element.date.substring(5,7))}
                                                            <div className='col-12'><img src={element.day.condition.icon} alt='weather-icon' /></div>
                                                            <div className='col-12 max-temp'>{element.day.maxtemp_c}	&#8451;</div>
                                                            <div className='col-12 min-temp' >{element.day.mintemp_c}	&#8451;</div>
                                                        </div>
                                                    ))
                                                    :
                                                    this.state.type === 'k' 
                                                    ?
                                                    this.state.weather[0].forecast.forecastday.map((element,index) =>(
                                                        index === 0 
                                                        ?
                                                        <div className='text-left' key={index}>
                                                            <div className='col-12 forecast-day' >Today</div>
                                                            <div className='col-12'><img src={element.day.condition.icon} alt='weather-icon' /></div>
                                                            <div className='col-12 max-temp'>{element.day.maxtemp_c + 273}	&#8490;</div>
                                                            <div className='col-12 min-temp'>{element.day.mintemp_c + 273}	&#8490;</div>
                                                        </div>
                                                        :
                                                        <div style={{marginLeft:'-15px'}} key={index}>
                                                            <div className='col-12 forecast-day'>{this.state.day[require("day-of-week").get(new Date(element.date.substring(0,4),element.date.substring(5,7),element.date.substring(8,10)))]}</div>
                                                            {console.log(element.date.substring(5,7))}
                                                            <div className='col-12'><img src={element.day.condition.icon} alt='weather-icon' /></div>
                                                            <div className='col-12 max-temp'>{element.day.maxtemp_c + 273}	&#8490;</div>
                                                            <div className='col-12 min-temp' >{element.day.mintemp_c + 273}	&#8490;</div>
                                                        </div>
                                                    ))
                                                    :
                                                    this.state.weather[0].forecast.forecastday.map((element,index) =>(
                                                        index === 0 
                                                        ?
                                                        <div className='text-left' key={index}>
                                                            <div className='col-12 forecast-day' >Today</div>
                                                            <div className='col-12'><img src={element.day.condition.icon} alt='weather-icon' /></div>
                                                            <div className='col-12 max-temp'>{element.day.maxtemp_f}	&#8457;</div>
                                                            <div className='col-12 min-temp'>{element.day.mintemp_f}	&#8457;</div>
                                                        </div>
                                                        :
                                                        <div style={{marginLeft:'-15px'}} key={index}>
                                                            <div className='col-12 forecast-day'>{this.state.day[require("day-of-week").get(new Date(element.date.substring(0,4),element.date.substring(5,7),element.date.substring(8,10)))]}</div>
                                                            {console.log(element.date.substring(5,7))}
                                                            <div className='col-12'><img src={element.day.condition.icon} alt='weather-icon' /></div>
                                                            <div className='col-12 max-temp'>{element.day.maxtemp_f}	&#8457;</div>
                                                            <div className='col-12 min-temp' >{element.day.mintemp_f}	&#8457;</div>
                                                        </div>
                                                    ))
                                                    
                                                }
                                                
                                            </div>
                                        </div>        
                                    </div>
                                <hr/>
                            
                        </div> 
                            
                            :
                            ""
                        }
                        <div className='row content-under-card'>
                            <div className='col-* left-side' onClick={() => this.TypeChange('c')}>c</div>
                            <div className='col-* vertical-line left-side'></div>
                            <div className='col-* left-side' onClick={() => this.TypeChange('f')}>f</div>
                            <div className='col-* vertical-line left-side'></div>
                            <div className='col-* left-side' onClick={() =>this.TypeChange('k')}>k</div>
                            <div className='col-* right-side'> <a className='nav-link' rel="noopener noreferrer" href="http://www.weather.com/wx/today/?lat=13.04&amp;lon=77.62&amp;locale=en_US&amp;par=google" target="_blank">More on weather.com    </a></div>
                        </div>
                    </div>

                </div>
                
            </div>
        )
    }
}
export default Weather;