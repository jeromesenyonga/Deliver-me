import React, {Component} from 'react';
import ReactMapGL,{Marker} from 'react-map-gl';
//import getCoords from 'city-to-coords'; 

/*var g = require('@google/maps').createClient({
  key: 'AIzaSyAG4qsKT2mJ-Zf1ZWwQXmrAX6s0iC55MZ4'
})*/
var g = require('@mapbox/mapbox-gl-geocoder')

class Map extends Component {

  state = {
    viewport: {
      width: 800,
      height: 550,
      latitude: 0.279861,
      longitude: 32.622520,
      zoom: 12.5
    }
  };

  render() {
    var geo = new g({accessToken: 'pk.eyJ1IjoiamVyb21lc2VueW9uZ2EiLCJhIjoiY2poYWg3YjU0MGFlbjNkbnpwNW9tdjF6MCJ9.iFJjr2PviJnT41EIdiOA4A'})
    console.log(geo)
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={'pk.eyJ1IjoiamVyb21lc2VueW9uZ2EiLCJhIjoiY2poYWg3YjU0MGFlbjNkbnpwNW9tdjF6MCJ9.iFJjr2PviJnT41EIdiOA4A'}
        mapStyle='mapbox://styles/mapbox/streets-v9'
        >
          <Marker 
           latitude= {0.299861}
           longitude= {32.613174}>
            <i class="fas fa-map-marker-alt fa-2x"></i>
          </Marker>
          
          <Marker 
           latitude= {0.260611}
            longitude= {32.635383}>
           <i class="fas fa-map-marker-alt fa-2x"></i>
          </Marker>
      
      </ReactMapGL>
    );
  }
}

export default Map
