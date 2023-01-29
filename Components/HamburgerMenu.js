import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { SlMenu } from 'react-icons/sl';

import Link from 'next/link';

export default function HamburgerMenu({ iconColor, displayIcon }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {displayIcon ? (
        <p
          id={`glow${iconColor === 'green' ? 'emerald' : iconColor}`}
          className={`text-${iconColor}-400 inline-block m-6  laptop:text-3xl p-5 iphone:text-xl iphone:text-center bg-slate-100 shadow-md`}
        >
          S.I.
        </p>
      ) : (
        <></>
      )}
      <div className='mx-10 right-0 top-0 fixed opacity-[90%] rounded-md z-10'>
        <Button
          id='basic-button'
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <SlMenu size={40} color={`${iconColor}`} className='mt-8' />
        </Button>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>
            <Link href='/'>Home</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href='/#projects'>Projects</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href='/about'>About</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href='/contact'>Contact</Link>
          </MenuItem>
        </Menu>
      </div>
    </>
  );
}
