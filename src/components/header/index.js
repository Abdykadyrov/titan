import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css';

class Index extends Component {
  render() {
    return (
      <nav className="header uk-navbar-container uk-margin" data-uk-navbar data-uk-sticky="bottom: #offset">
        <div className="uk-navbar-center">
          <div className="uk-navbar-center-left">
            <div>
              <ul className="uk-navbar-nav">
                <li className="uk-active"><Link to="/about">О компании</Link></li>
                <li>
                  <Link to="/">Parent</Link>
                  <div className="uk-navbar-dropdown">
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                      <li className="uk-active"><Link to="/">Active</Link></li>
                      <li><Link to="/">Item</Link></li>
                      <li><Link to="/">Item</Link></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <Link className="uk-navbar-item uk-logo" to="/">Logo</Link>
          <div className="uk-navbar-center-right">
            <div>
              <ul className="uk-navbar-nav">
                <li><Link to="/product">Продукция</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Index;