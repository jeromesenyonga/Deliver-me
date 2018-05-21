import React, {Component} from 'react';
import ReactMapGL,{Marker} from 'react-map-gl';

class Map extends Component {
  constructor(props){
    super(props)
    this.state = {
      viewport: {
        width: 800,
        height: 550,
        latitude: 0.279861,
        longitude: 32.622520,
        zoom: 12.5
      }
    };
  
  }

  render() {
  //console.log(this.props.pickUpLocation)
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={'pk.eyJ1IjoiamVyb21lc2VueW9uZ2EiLCJhIjoiY2poYWg3YjU0MGFlbjNkbnpwNW9tdjF6MCJ9.iFJjr2PviJnT41EIdiOA4A'}
        mapStyle='mapbox://styles/mapbox/streets-v9'
        >
          <Marker 
           latitude= {this.props.pickUpLocation.lat}
           longitude= {this.props.pickUpLocation.lng}>
           <i class="fas fa-map-pin fa-2x"></i>
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