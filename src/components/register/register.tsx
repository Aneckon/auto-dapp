import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { authAxios } from '../axios';

import { RegisterResendOtp, RegisterSendOtp } from './registerOtp';

type Inputs = {
  email: string;
};

export const Register = () => {
  const [axiosError, setAxiosError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onChange',
  });

  const handleRegister = (data: any) => {
    if (errors) {
      if (location.pathname === '/auth/register') {
        if (axiosError) {
          navigate('/auth/register/sendotp');
        }
        const url = '/sendOTP';
        authAxios({ data, url, setAxiosError });
      }
      if (location.pathname === '/auth/register/sendotp') {
        if (axiosError) {
          navigate('/auth/register/resendotp');
        }

        const url = '/resendOTP';
        authAxios({ data, url, setAxiosError });
      }
      if (location.pathname === '/auth/register/resendotp') {
        if (axiosError) {
          navigate('/auth/login');
        }

        const url = '/checkOTP';
        authAxios({ data, url, setAxiosError });
      }
      if (location.pathname === '/auth/register/resendotp') {
        if (axiosError) {
          navigate('/auth/login');
          const url = '/addUser';
          authAxios({ data, url, setAxiosError });
        }
      }
    }
  };

  return (
    <div className="bg-img-card">
      <div className="container p-5 text-center">
        <form
          className="row d-flex justify-content-center align-items-center h-100"
          style={{ borderRadius: '1rem' }}
          onSubmit={handleSubmit(handleRegister)}>
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
                {axiosError && (
                  <div className="alert alert-danger">
                    <div>{axiosError}</div>
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
            <RegisterSendOtp axiosError={axiosError} register={register} errors={errors} />
          )}
          {location.pathname === '/auth/register/resendotp' && (
            <RegisterResendOtp axiosError={axiosError} register={register} errors={errors} />
          )}
        </form>
      </div>
    </div>
  );
};
