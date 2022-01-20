import React from 'react';

export const Form = ({ onSubmit, parkinglot }) => {
  return (
    <form onSubmit={onSubmit} method="POST">
      <input type="hidden" name="parkinglot" value={parkinglot} />
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input required className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input required
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="telephone">Telephone</label>
      <input required
            type="number"
            className="form-control"
            id="telephone"
            placeholder="Phone Number"
        />
        </div>
        <div className="form-group">
            <label htmlFor="cartype">Select CarType</label>
            <select required className="form-control" id="cartype">
                <option value="Sedan">Sedan</option>
                <option value="Pickup">Pickup</option>
                <option value="CRV">CRV</option>
                <option value="Van">Van</option>
                <option value="Sports car">Sports Car</option>
                <option value="Super car">Super Car</option>
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
