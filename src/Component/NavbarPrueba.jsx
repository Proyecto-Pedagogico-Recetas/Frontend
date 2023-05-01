import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineTags, AiOutlineHeart, AiOutlineLogout } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { Container, Navbar, Nav } from "react-bootstrap";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {AiFillHome} from 'react-icons/ai';
import {BsPersonFill} from 'react-icons/bs';
import {MdFoodBank} from "react-icons/md";
import {MdBorderColor} from "react-icons/md";
import {HiOutlineLogout} from "react-icons/hi";


function NavbarPrueba() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { userStorage, setUserStorage } = useContext(UserContext);
    const navigate = useNavigate();
  
    const handleLogout = () => {
      setUserStorage("");
      navigate('/');
    };


    return (
        <div>
            <MediaQuery minWidth={768}>
                {/* barra lateral en pantallas grandes */}
                <div className="sidebar"  style={{ position: "fixed", width: "9vw", overflow: "hidden", backgroundColor: "#8B8961", borderRadius: '15px' , width: '150px', height:'280px', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '50px'}}>
               <Nav.Link  href='/' style={{ color: "white", marginBottom: "1rem", marginLeft:'20px' }}>
                  <AiFillHome className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px", size: "20px" }} /> Home
                </Nav.Link>
                <Nav.Link href='/UserList' style={{ color: "white", marginBottom: "1rem", marginLeft:'20px' }}>
                  <BsPersonFill className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px", size: "20px" }} /> Usuarios
                </Nav.Link>
                <Nav.Link href='AdminRecipeView' style={{ color: "white", marginBottom: "1rem", marginLeft:'20px' }}>
                  <MdFoodBank className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", size: "2em", marginBottom: "10px", size: "4em" }} /> Recetas
                </Nav.Link>
                <Nav.Link href= '/List' style={{ color: "white", marginBottom: "1rem", marginLeft:'20px'}}>
                  <MdBorderColor className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", size: "2em", marginBottom: "10px", size: "4em" }} /> Lista de Pedidos
                </Nav.Link>
                <Nav.Link href= '/' style={{ color: "white", marginBottom: "1rem", marginLeft:'20px' }}>
                <HiOutlineLogout className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", size: "2em", marginBottom: "10px", size: "4em" }} onClick={handleLogout} /> Cerrar sesión
              </Nav.Link>
                </div>
            </MediaQuery>

            <MediaQuery maxWidth={767}>
                {/* sub-navbar en pantallas pequeñas */}
                <Navbar expand="lg" variant="light" style={{ marginTop: '20px', marginBottom: '-20px' , backgroundColor: "#8B8961", borderRadius: '15px'}} >
                    <Container className="d-flex flex-column flex-md-row">
                        <Nav className="w-100 justify-content-around flex-row">

                        <Nav.Link  href='/' style={{ color: "white", marginBottom: "1rem" }}>
                  <AiFillHome className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px", size: "20px" }} />
                </Nav.Link>
                <Nav.Link href='/UserList' style={{ color: "white", marginBottom: "1rem" }}>
                  <BsPersonFill className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px", size: "20px" }} />
                </Nav.Link>
                <Nav.Link href='AdminRecipeView' style={{ color: "white", marginBottom: "1rem" }}>
                  <MdFoodBank className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", size: "2em", marginBottom: "10px", size: "4em" }} />
                </Nav.Link>
                <Nav.Link href= '/List' style={{ color: "white", marginBottom: "1rem" }}>
                  <MdBorderColor className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", size: "2em", marginBottom: "10px", size: "4em" }} /> 
                </Nav.Link>
                <Nav.Link href= '/' style={{ color: "white", marginBottom: "1rem" }}>
                <HiOutlineLogout className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", size: "2em", marginBottom: "10px", size: "4em" }} onClick={handleLogout} />
              </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </MediaQuery>
        </div>
    );
}

export default NavbarPrueba;