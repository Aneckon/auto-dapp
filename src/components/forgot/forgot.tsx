import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { authAxios } from '../axios';

export const Forgot = () => {
  const url = '/resendPassword';

  const [axiosError, setAxiosError] = useState(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const handleForgot = (data: any) => {
    authAxios({ data, url, setAxiosError });
  };

  return (
    <div className="card-body p-5 text-center">
      <form onSubmit={handleSubmit(handleForgot)}>
        <h3 className="mb-5">Forgot Password</h3>

        <div className="form-floating mb-3">
          <input
            {...register('email', {
              required: true,
              maxLength: 20,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
          <label>Email address</label>
          {errors.email ? (
            <div className="alert alert-danger">
              <div>Enter valid email id</div>
            </div>
          ) : null}
          {axiosError ? (
            <div className="alert alert-danger">
              <div>{axiosError}</div>
            </div>
          ) : null}
        </div>

        <button
          className="btn btn-primary btn-lg btn-block"
          type="submit">
          Send Password
        </button>
      </form>
    </div>
  );
};
