import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='text-center'>Deliver Me</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='offset-md-3 col-md-9'>
              <h4><strong>Ship It Quick</strong></h4>
            </div>
          </div>
            <div className='row'>
              <div className='offset-md-1 col-md-10'>
                <form>
                  <div className='form-group'>
                  <input type='text' className='form-control' placeholder='Pick up location ' />
                  </div>
                  <div className='form-group'>
                  <input type='text' className='form-control' placeholder='End destination ' />
                  </div>
                  <div className='form-group'>
                  <input type='number' className='form-control' placeholder='Quantity' />
                  <span>
                    <button className='btn btn-secondary dropdown-toggle' type='button' id='anyid' aria-haspopup='true' aria-expanded='false'>
                      Qty
                    </button>
                  </span>
                </div>
                  <div className='form-group'>
                  <label class="form-control">Price</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255344.55326607867!2d32.45903562062639!3d0.3133717662957107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f9d74b39b%3A0x4538903dd96b6fec!2sKampala!5e0!3m2!1sen!2sug!4v1526487263715"
              width="800" height="600" frameborder="0" style={{border:0}} allowfullscreen></iframe>

          </div>
        </div>
      </div>
    );
  }
}

export default App;