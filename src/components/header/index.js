import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css';

class Header extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const navbar = document.getElementById("navbar");
    const sticky = navbar.offsetTop;
    if (window.pageYOffset > sticky)
      navbar.classList.add("sticky");
    else
      navbar.classList.remove("sticky");
  };

  render() {
    return (
      <nav className="header" id="navbar">
        <div className="uk-navbar-center">
          <div className="uk-navbar-center-left">
            <div>
              <ul className="uk-navbar-nav">
                <li><Link to="/about">О компании</Link></li>
                <li><a href="#services" data-uk-scroll>Услуги</a></li>
              </ul>
            </div>
          </div>
          <Link className="uk-navbar-item uk-logo" to="/">Logo</Link>
          <div className="uk-navbar-center-right">
            <div>
              <ul className="uk-navbar-nav">
                <li><a href="#price" data-uk-scroll>Прайс</a></li>
                <li><Link to="/product">Продукция</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;