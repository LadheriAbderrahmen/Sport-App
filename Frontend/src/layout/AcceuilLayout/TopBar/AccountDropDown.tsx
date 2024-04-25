import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { MdAccountCircle } from 'react-icons/md'
import { Link } from 'react-router-dom';
const CustomToggle = React.forwardRef(({ children, onClick }:any, ref :any) => (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));
function AccountDropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} variant="success" id="dropdown-basic">
      <MdAccountCircle className='Icons' />
      </Dropdown.Toggle>

      <Dropdown.Menu className='mt-2'>
        <Dropdown.Item ><Link to='/Dashboard'>Dashboard</Link></Dropdown.Item>
        <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
        <Dropdown.Item href="#/action-3">LogOut</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default AccountDropDown