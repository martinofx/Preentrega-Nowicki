import React from 'react';
import { Navbar, Nav, Badge, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  const cartItemsCount = 5; // Cantidad hardcodeada (Se puede Cambiar segun que se)

  return (
    <Nav.Link href="/carrito" className="position-relative">
      <FaShoppingCart size={20} />
      <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
        {cartItemsCount}
      </Badge>
    </Nav.Link>
  );
};

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Inicio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">        
        <Nav>
          <Nav.Link href="/mi-cuenta">Mi Cuenta</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav className="mr-auto">
          <Nav.Link href="/productos">Productos</Nav.Link>
          <CartWidget />
        </Nav>
    </Navbar>
  );
};

export default NavBar;