import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

import { RegisterResendOtp, RegisterSendOtp } from './registerOtp';

type Inputs = {
  email: string;
};

export const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onChange',
  });

  const handleLogin = (data: any) => {
    console.log(data, 'login');
    if (errors) {
      if (location.pathname === '/auth/register') {
        navigate('/auth/register/sendotp');
      }
      if (location.pathname === '/auth/register/sendotp') {
        navigate('/auth/register/resendotp');
      }
      if (location.pathname === '/auth/register/resendotp') {
        navigate('/auth/login');
      }
    }
  };

  return (
    <div className="bg-img-card">
      <div className="container p-5 text-center">
        <form
          className="row d-flex justify-content-center align-items-center h-100"
          style={{ borderRadius: '1rem' }}
          onSubmit={handleSubmit(handleLogin)}>
          {location.pathname === '/auth/register' && (
            <div>
              <h3 className="mb-5">Sign Up</h3>
              <div className="form-floating mb-3">
                <input
                  {...register('email', {
                    required: true,
                    maxLength: 20,
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  })}
                  type="email"
                  className="form-control"
                  id="emailIdNew"
                  placeholder="name@example.com"
                />
                <label>Email address</label>
                {errors.email && (
                  <div className="alert alert-danger">
                    <div>Enter valid email id</div>
                  </div>
                )}
              </div>
              <button className="btn btn-primary btn-lg btn-block" type="submit">
                Send OTP
              </button>
              <label
                className="lable"
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
          )}
          {location.pathname === '/auth/register/sendotp' && (
            <RegisterSendOtp register={register} errors={errors} />
          )}
          {location.pathname === '/auth/register/resendotp' && (
            <RegisterResendOtp register={register} errors={errors} />
          )}
        </form>
      </div>
    </div>
  );
};
