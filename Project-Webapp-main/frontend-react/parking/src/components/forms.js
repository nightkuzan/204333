import React from 'react';

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="telephone">Telephone</label>
      <input
            type="number"
            className="form-control"
            id="telephone"
            placeholder="Phone Number"
        />
        </div>
        <div className="form-group">
            <label htmlFor="cartype">Select CarType</label>
            <select className="form-control" id="cartype">
                <option value="1">Sedan</option>
                <option value="2">Pickup</option>
                <option value="3">CRV</option>
                <option value="4">Van</option>
                <option value="5">Sports Car</option>
                <option value="6">Super Car</option>
            </select>
        </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
