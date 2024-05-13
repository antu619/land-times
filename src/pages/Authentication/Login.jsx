import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import Header from '../shared/Header/Header';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
    }
    return (
        <div>
            <Header />
            <Navbar />
            <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body w-96">
  <h3 className='text-xl font-poppins font-bold text-center'>Login</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="Enter Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="Enter Your Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className='btn bg-cyan-600 hover:bg-cyan-600 text-white'>Login</button>
        </div>
        <div className='divider'>or</div>
      <p className='text-sm text-center font-poppins'>Do not have an account? <Link className="text-cyan-600" to='/register'>Register Now.</Link></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;