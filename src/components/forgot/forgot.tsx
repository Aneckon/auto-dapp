import React from 'react';

export const Forgot = () => {
  return (
    <div className="card-body p-5 text-center">
      <form>
        <h3 className="mb-5">Forgot Password</h3>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="emailforgot"
            placeholder="name@example.com"
          />
          <label>Email address</label>
        </div>

        <button className="btn btn-primary btn-lg btn-block" type="button">
          Send Password
        </button>
      </form>
    </div>
  );
};
