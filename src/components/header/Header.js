import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../../redux/features/carSlice";
import { useSelector } from "react-redux";

function Header({ isMenuOpen, setIsMenuOpen }) {
  const cars = useSelector(selectCars);
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img
            className="header__logoImg"
            src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
            alt=""
          />
        </Link>
      </div>
      <div className="header__links">
        {cars.map((car, index) => (
          <Link to="/" key={index}>
            {car}
          </Link>
        ))}
      </div>
      <div className="header__right">
        <Link to="/" className={isMenuOpen ? "header__link--hidden" : ""}>
          Shop
        </Link>
        <Link to="/login" className={isMenuOpen ? "header__link--hidden" : ""}>
          Tesla Account
        </Link>
        <div
          className="header__menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </div>
  );
}

export default Header;
