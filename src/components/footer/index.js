import React, {Component} from 'react';
import './style.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="uk-container">
          <div className="uk-flex uk-flex-column">
            <span>ТОО «ТCК ТИТАН»</span>
            <span>8(7142)28-02-08, 28-02-66, 8(701)7950455</span>
            <span>Костанай, Казахстан, ул. Дорожников 2</span>
            <span>too_titan77@mail.ru</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;