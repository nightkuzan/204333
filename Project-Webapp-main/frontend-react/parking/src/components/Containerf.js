import React, { Component } from 'react';
import { Modal } from './Modal';
import TriggerButton from './TriggerButton';
import Lot from './lot'
import axios from 'axios';
import Form from './forms';
const SERVER_URL = 'http://localhost:5500';

export class Container extends Component {
  state = { isShown: false, completed: false };
  triggerText = 'Open form';

  submitResponseHandler =(response) => {
    console.log(response);
    if(response.data.status === 'completed') {
    this.setState({isShown: false, completed: true});
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
    })
    .then(this.submitResponseHandler)
    .catch(function (error) {
      console.log(error);
    });
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log(event.target.telephone.value);
    console.log(event.target.cartype.value);
    
  };
  showModal = () => {
    this.setState({ isShown: true }, () => {
      this.closeButton.focus();
    });
    this.toggleScrollLock();
  };
  closeModal = () => {
    this.setState({ isShown: false });
    this.toggleScrollLock();
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

  addCarForm = <Form onSubmit={this.onSubmit} />;

  render() {
    return (
      <React.Fragment>
        
        <Lot txt ={this.triggerText} onSubmit={this.onSubmit} showModal={this.showModal}/>
        <Lot txt ={this.triggerText} onSubmit={this.onSubmit} showModal={this.showModal}/>
        {this.state.isShown ? (
          <Modal
            // onSubmit={this.onSubmit}
            modalRef={(n) => (this.modal = n)}
            buttonRef={(n) => (this.closeButton = n)}
            closeModal={this.closeModal}
            onKeyDown={this.onKeyDown}
            onClickOutside={this.onClickOutside}
            modalContent={this.addCarForm}
          />
        ) : null}
        {this.state.completed && (
          <Modal
            modalRef={(n) => (this.modal = n)}
            buttonRef={(n) => (this.closeButton = n)}
            closeModal={this.closeModal}
            onKeyDown={this.onKeyDown}
            onClickOutside={this.onClickOutside}
            modalContent={<h4>Booking completed</h4>} />
        )}
      </React.Fragment>
    );
  }
}

export default Container;
