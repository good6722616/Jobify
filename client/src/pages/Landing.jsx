import React from "react";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Logo } from "../components";
import { Link } from "react-router-dom";
export const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> App & Shei Pu
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            magnam vitae saepe, sapiente quia alias facilis doloribus culpa sint
            consectetur reprehenderit asperiores? Repudiandae porro explicabo
            ipsa hic? Exercitationem, libero similique.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn login-link">
            Login/Demo
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};
