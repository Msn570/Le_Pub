import React from "react";
import "./style.css";
import { HelmetProvider } from "react-helmet-async";
import { Container,} from "react-bootstrap";
import Menu2 from "../../components/Menu2";

export const Restauration = () => {
  return (
    <HelmetProvider>
      <Container className="Restauration-header">  
       <Menu2>
       </Menu2>
      </Container>
    </HelmetProvider>
  );
};
