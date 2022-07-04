import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from '..';

import Logo from '../image/logo.svg';

import './header.scss';

interface headerProps {
  setOpenAva: any;
  openAva: any;
}

export const Header: FC<headerProps> = ({ setOpenAva, openAva }) => {
  return (
    <header className="header pt-3 d-flex align-items-center justify-content-between">
      <img src={Logo} alt="" />
      <nav className="header__nav d-flex align-items-center justify-content-between">
        <ul className="header__list d-flex align-items-center justify-content-between">
          <li>
            <NavLink to="/" className="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/creation">Creation</NavLink>
          </li>
          <li>
            <NavLink to="/instruction">Instruction</NavLink>
          </li>
          <li>
            <NavLink to="/roadmap">Roadmap</NavLink>
          </li>
          <li>
            <NavLink to="/whitepaper">Whitepaper</NavLink>
          </li>
        </ul>
        <ul>
          <li onClick={(e) => e.stopPropagation()}>
            <div className="ava" onClick={() => setOpenAva(!openAva)}>
              U
              <div className={openAva ? 'ava__dropdown' : 'none'}>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/">LogOut</NavLink>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <Button className="btn btn-light btn-rounded">Connect</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
