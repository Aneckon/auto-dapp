import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface registerProps {
  register: any;
  errors: any;
}

export const RegisterSendOtp: FC<registerProps> = ({ register, errors }) => {
  const navigate = useNavigate();

  return (
    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
      <div
        className="card shadow-2-strong card-body p-5 text-center"
        style={{ borderRadius: '1rem' }}>
        {' '}
        <h3 className="mb-5">Sign Up</h3>
        <div className="form-floating mb-3">
          <input
            {...register('firstName', {
              required: true,
              maxLength: 20,
              pattern: /^[a-z0-9._%+-]/,
            })}
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Username"
          />
          <label>Enter Your Username </label>
          {errors.firstName && (
            <div className="alert alert-danger">
              <span className="text-danger">Username is required</span>
            </div>
          )}
        </div>
        <div className="form-floating mb-3">
          <input
            {...register('password', {
              required: true,
              maxLength: 20,
              pattern: /[a-z0-9A-Z]{8,16}/,
            })}
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
          <label>Password</label>
          {errors.password && (
            <div className="alert alert-danger">
              <span className="text-danger">
                Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase
                letter and 1 number
              </span>
            </div>
          )}
        </div>
        <div className="form-floating mb-3">
          <input
            {...register('lastPassword', {
              required: true,
              maxLength: 20,
              pattern: /[a-z0-9A-Z]{8,16}/,
            })}
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Password"
          />
          <label>Confirm Password</label>
          {errors.lastPassword && (
            <div className="alert alert-danger">
              <span className="text-danger">Passwords does not match</span>
            </div>
          )}
        </div>
        <button className="btn btn-primary btn-lg btn-block" type="submit">
          Send OTP
        </button>
        <label
          style={{
            textAlign: 'left',
            display: 'inline',
            float: 'left',
            padding: '20px',
          }}
          onClick={() => navigate('/auth/login')}>
          SignIn
        </label>
      </div>
    </div>
  );
};
