import React, { useState } from 'react'
import { Container, Dropdown, Form } from 'react-bootstrap'
import { IoIosNotifications } from 'react-icons/io';
import { MdAccountCircle } from 'react-icons/md'
const CustomToggle = React.forwardRef(({ children, onClick }:any, ref :any) => (
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

  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy } :  any, ref :any) => {
      const [value, setValue] = useState('');
  
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <Form.Control
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
              !value ||
              (typeof child === 'string' &&
                child.toLowerCase().startsWith(value)) ||
              (React.isValidElement(child) &&
                typeof child.props.children === 'string' &&
                child.props.children.toLowerCase().startsWith(value)),
          )}
          </ul>
        </div>
      );
    },
  );
function NotifDropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} variant="success" id="dropdown-basic">
      <IoIosNotifications className='Icons' />
      </Dropdown.Toggle>

      <Dropdown.Menu className='mt-2' as={CustomMenu}>
        <Dropdown.Item href="#/action-1"></Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default NotifDropDown