import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../image/logo.svg';
import { ConnectButton } from '../walletHooks/component/ButtonConnect/connectButton';

import './header.scss';

interface headerProps {
  setOpenAva: any;
  openAva: any;
}

const RPC = {
  1: 'https://mainnet.infura.io/v3/8ca77c4631f14dccb88318200cfca61d',
  3: 'https://ropsten.infura.io/v3/8ca77c4631f14dccb88318200cfca61d',
  4: 'https://rinkeby.infura.io/v3/8ca77c4631f14dccb88318200cfca61d',
  5: 'https://goerly.infura.io/v3/8ca77c4631f14dccb88318200cfca61d',
  42: 'https://kovan.infura.io/v3/8ca77c4631f14dccb88318200cfca61d',
};

export const Header: FC<headerProps> = ({ setOpenAva, openAva }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="header pt-3 d-flex align-items-center justify-content-between">
      <img src={Logo} alt="" />
      <nav
        className={
          openMenu
            ? 'header__nav align-items-center justify-content-between block'
            : 'header__nav align-items-center justify-content-between'
        }>
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
              <p>U</p>
              <div className={openAva ? 'ava__dropdown' : 'none ava__dropdown-mobile'}>
                <NavLink to="/profile">Profile</NavLink>
                <p onClick={() => localStorage.removeItem('token')}>LogOut</p>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li>
          <ConnectButton RPC={RPC} portisId={'portisId-key-project'} />
          </li>
        </ul>
      </nav>
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className={openMenu ? 'header__menu-burger remove' : 'header__menu-burger'}></div>
    </header>
  );
};
