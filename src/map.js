import React, {Component} from 'react';
import ReactMapGL,{Marker} from 'react-map-gl';
//import getCoords from 'city-to-coords';

/*var g = require('@google/maps').createClient({
  google key: 'AIzaSyAG4qsKT2mJ-Zf1ZWwQXmrAX6s0iC55MZ4'
})*/

class Map extends Component {

  state = {
    viewport: {
      width: 800,
      height: 550,
      latitude: 0.347596,
      longitude: 32.582520,
      zoom: 12.5
    }
  };

  render() {
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
            <svg height={20} viewBox='0 0 24 24'
              style={{cursor: 'pointer',
              fill: '#d00',
              stroke: 'none', transform: `translate(${-20/2}px,${-20}px)`}}
              >
              <path
                  d={`M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,
                  0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
                  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,
                  7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
                  C20.1,15.8,20.2,15.8,20.2,15.7z`}/>
            </svg>
          </Marker>

          <Marker
           latitude= {0.260611}
            longitude= {32.635383}>
            <svg height={20} viewBox='0 0 24 24'
              style={{cursor: 'pointer',
              fill: '#228B22',
              stroke: 'none', transform: `translate(${-20/2}px,${-20}px)`}}
              >
              <path
                  d={`M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,
                  0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
                  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,
                  7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
                  C20.1,15.8,20.2,15.8,20.2,15.7z`}/>
            </svg>
          </Marker>

      </ReactMapGL>
    );
  }
}

export default Map
