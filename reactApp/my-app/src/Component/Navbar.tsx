import {Button, Container,Nav,Navbar as NavbarBs} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import './navbar.css'

export function Navbar()
{
    return( 
    <NavbarBs sticky="top" className = "bg-white shadow-sm mb-3">
        <Container>
            <Nav>
                <Nav.Link to="/" as={NavLink}>
                  Home
                </Nav.Link>
                <Nav.Link to="/store" as={NavLink}>
                  Store
                </Nav.Link>
                <Nav.Link to="/about" as={NavLink}>
                  About
                </Nav.Link>
            </Nav>
              <Button style={{position:"relative" ,width:"3rem", height:"3rem"}} variant="outline-primary" className="rounded-circle"><i className="fa-solid fa-cart-shopping"></i></Button>
              <div className="rounded-circle bg-danger d-flex justify-content-center
               align-items-center"
              style={{
                position:"absolute",
                bottom :0,
                right:120,
                color:"white",
                width:"1.5rem",
                height:"1.5rem",
                transform:"translate(25%,25%)"
              }}>3

              </div>
        </Container>
    </NavbarBs>
    )
}