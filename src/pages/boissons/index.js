import React from "react";
import "./style.css";
import { HelmetProvider } from "react-helmet-async";
import { Container,} from "react-bootstrap";
import Menu from "../../components/Menu";

export const Boissons = () => {
  return (
    <HelmetProvider>
      <Container className="Boissons-header">  
       <Menu>
       </Menu>
      </Container>
    </HelmetProvider>
  );
};
