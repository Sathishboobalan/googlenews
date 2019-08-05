import React, { Component } from 'react';
import Header from '../src/componenets/header/header';
import NewsFeed from '../src/componenets/newsFeed/newsFeed';
import Custom from '../src/componenets/custom/custom'
import './App.css';
import {Route , BrowserRouter as Router} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div>
       
        <Router>
          <Header />
          <Route exact path='/' render={()=><NewsFeed/>} />
          <Route exact path='/foryou'  render={()=><Custom value='foryou' />} />
          <Route exact path='/favourites'  render={()=><Custom value='favourites' />} />
          <Route exact path='/savedsearch'  render={()=><Custom value='savedsearch' />} />
          <Route exact path='/world'  render={()=><Custom value='world' img="https://png.pngtree.com/png-clipart/20190515/original/pngtree-3d-earth-render-10-png-image_3536350.jpg"/>}/>
          <Route exact path='/india'  render={()=><Custom value='india' img="https://png.pngtree.com/png-clipart/20190515/original/pngtree-indian-flag-republic-day-independence-day-png-image_3782743.jpg" />}/>
          <Route exact path='/local'  render={()=><Custom value='karnataka' img="https://png.pngtree.com/png-clipart/20190516/original/pngtree-vector-location-icon-png-image_3778133.jpg" />}/>
          <Route exact path='/business'  render={()=><Custom value='business' img='https://png.pngtree.com/png-clipart/20190515/original/pngtree-colorful-shopping-sale-banner-template-discount-sale-banner-collection-set-png-image_3527853.jpg' />}/>
          <Route exact path='/technology'  render={()=><Custom value='technology' img='https://png.pngtree.com/png_detail/20181016/internet-computer-technology-png-clipart_320594.png' />}/>
          <Route exact path='/entertainment'  render={()=><Custom value='entertainment' img='https://png.pngtree.com/png-clipart/20190515/original/pngtree-red-curtain-and-empty-theatrical-scene-png-image_3568366.jpg' />}/>
          <Route exact path='/sports'  render={()=><Custom value='sports' img='https://png.pngtree.com/png-clipart/20190515/original/pngtree-abstract-cricket-background-png-image_3561303.jpg' />}/>
          <Route exact path='/science'  render={()=><Custom value='science' img='https://png.pngtree.com/png-clipart/20190603/original/pngtree-luminous-efficiency-of--technology-png-image_181704.jpg' />}/>
          <Route exact path='/health'  render={()=><Custom value='health' img='https://png.pngtree.com/png-clipart/20190515/original/pngtree-heart-care-icon-with-a-stethoscope-png-image_3670172.jpg' />}/>       
        </Router>

      </div>
    );
  }
}

export default App;
 