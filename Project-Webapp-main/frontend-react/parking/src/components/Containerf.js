import React, { Component, useState } from 'react';
import { Modal } from './Modal';
import TriggerButton from './TriggerButton';
import Lot from './lot'
import axios from 'axios';
import Form from './forms';
import containercss from './css/containerf.css';
const SERVER_URL = 'http://localhost:5500';


export class Container extends Component {
  state = { isShown: false, completed: false, parkinglotState: [], parkinglot: '', onFormSubmitted: () => {} }; 
  triggerText = 'Open form';

  LotContext = React.createContext(this.showModal);

  submitResponseHandler =(response) => {
    console.log(response);
    if(response.data.status === 'completed') {
    this.setState({isShown: false, completed: true});
    this.state.onFormSubmitted(response.data.id, true);
    window.setTimeout(() => this.setState({completed: false}), 2000);
    }
    else{
      alert(response.data.message);
    }
  } 
  onSubmit = (event) => {
    event.preventDefault(event);
    axios.post(`${SERVER_URL}/create`, {
      name: event.target.name.value,
      email: event.target.email.value,
      telephone: event.target.telephone.value,
      cartype: event.target.cartype.value,
      parkinglot: this.state.parkinglot,
    })
    .then(this.submitResponseHandler)
    .catch(function (error) {
      console.log(error);
    });
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log(event.target.telephone.value);
    console.log(event.target.cartype.value);
    console.log(this.state.parkinglot);
    
  };
  showModal = (pl,onFormSubmitted) => {
    return () => {
      this.setState({ isShown: true,  });
      this.setState({parkinglot: pl});
      this.setState({onFormSubmitted: onFormSubmitted});
      console.log(this.state.parkinglot);
      console.log(pl);
    };
        
  };
  closeModal = () => {
    this.setState({ isShown: false });
  };
  onKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  };
  onClickOutside = (event) => {
    if (this.modal && this.modal.contains(event.target)) return;
    this.closeModal();
  };

  toggleScrollLock = () => {
    document.querySelector('html').classList.toggle('scroll-lock');
  };

  addCarForm = <Form onSubmit={this.onSubmit} parkinglot={this.state.parkinglot}/>;
  parkinglotState = [];

  async keepUpToDate() {
    const url = `${SERVER_URL}/carsparking`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ parkinglotState: data });
    console.log(data);
  }

  sendCancelRequest = async (id) => {
    const url = `${SERVER_URL}/cancel/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }


  async componentDidMount() {
    this.keepUpToDate = this.keepUpToDate.bind(this);
    this.keepUpToDate();
    this.keepUpToDateInterval = window.setInterval(this.keepUpToDate, 5000);
  }

 

  render() {
    return (
      <React.Fragment>
        <div className="container-lot">
        {
          this.state.parkinglotState.map(lot => (
          <>
          <Lot 
          key={lot.parkinglot} 
          parkinglot={lot.parkinglot} 
          available={lot.available} 
          cartype={lot.cartype} 
          showModal={this.showModal}
          sendCancelRequest={this.sendCancelRequest}
          timer = {lot.time}
           />
        </>
        ))
        }

        
        </div>

        {this.state.isShown ? (
          <Modal
            modalRef={(n) => (this.modal = n)}
            buttonRef={(n) => (this.closeButton = n)}
            closeModal={this.closeModal}
            onKeyDown={this.onKeyDown}
            onClickOutside={this.onClickOutside}
            modalContent={this.addCarForm}
          />
        ) : null}
        {this.state.completed && (
          <><Modal
            modalRef={(n) => (this.modal = n)}
            buttonRef={(n) => (this.closeButton = n)}
            closeModal={this.closeModal}
            onKeyDown={this.onKeyDown}
            onClickOutside={this.onClickOutside}
            modalContent={<h4>Booking completed</h4>} />
           
            </>
        )}
      </React.Fragment>
    );
  }
}

export default Container;
