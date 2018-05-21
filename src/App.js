import React, { Component } from 'react';
import './App.css';
import Map from './map'
var geocoder=require('geocoder')


class App extends Component {
  state= {
    start:'',
    startCoordinates:{lat:0.299861, lng:32.613174},

    stop:'',
    stopCoordinates:{lat:0.270861, lng:32.632520}
  }
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='text-center title'>Deliver Me</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <div className='row mb-3'>
              <div className='offset-md-3 col-md-9'>
                <h4><strong>Ship It Quick</strong></h4>
              </div>
            </div>
            <div className='row'>
              <div className='offset-md-1 col-md-10'>
                <form
                >
                  <div className='form-group'>
                    <input type='text' className='form-control' placeholder='Pick up location: '
                    autoFocus
                    onChange={(location)=>{
                      this.setState({start:location.target.value})
                    }}
                    onKeyPress={(sp)=>{
                    if(sp.key==='Enter'){
                      //console.log(this.state.start);
                      
                      //trasnformin location of starting point to coordinates
                      geocoder.geocode(this.state.start, (err, data)=>{
                        if(err){
                          console.log(err)
                        }else{
                          //console.log(data.results[0].geometry.location)
                        this.setState({startCoordinates:data.results[0].geometry.location})
                      }})
                    }
                    }}
                    />
                    
                  </div>
                  <div className='form-group'>
                    <input type='text' className='form-control' placeholder='Destination Point: '
                    onChange={(destination)=>{
                      //console.log('destin')
                      this.setState({stop:destination.target.value})
                    }}
                    onKeyPress={(sp)=>{
                      if(sp.key==='Enter'){
                        //console.log(this.state.stop)

                        geocoder.geocode(this.state.stop, (err, data)=>{
                          if(err){
                            console.log(err)
                          }else{
                          this.setState({stopCoordinates:data.results[0].geometry.location})
                        }})
                      }
                    }}
                    />
                  </div>
                  <div className='input-group mb-3'>
                    <input type='number' className='form-control' placeholder='Quantity' />
                    <div className='input-group-append'>
                      <select className='btn btn-secondary'>
                        <option selected>Qty</option>
                      </select>
                      {/*<button className='btn btn-secondary dropdown-toggle' type='button' id='anyid' aria-haspopup='true' aria-expanded='false'>
                        Qty
                      </button>*/}
                    </div>
                  </div>
                  <div className='form-group'>
                    <label className="form-control">Price:</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
          <Map pickUpLocation={this.state.startCoordinates}
              deliveryPoint={this.state.stopCoordinates}
          />
          {/*<div id='map' style={{width: '400px', height: '300px'}}></div>*/}
            {/*<iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255344.55326607867!2d32.45903562062639!3d0.3133717662957107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f9d74b39b%3A0x4538903dd96b6fec!2sKampala!5e0!3m2!1sen!2sug!4v1526487263715"
              width="800" height="500" frameborder="0" style={{border:0}} allowfullscreen></iframe>*/}

          </div>
        </div>
      </div>
    );
  }
}

export default App;
