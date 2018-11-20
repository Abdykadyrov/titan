import React, {Component} from 'react';
import file from "../../resources/Прайс на 26 июня 2018 новый - ТОО ТеплоСтройАгромаш Комплект (солома).xls";

class Form extends Component {
  render() {
    return(
      <form>
        <fieldset className="uk-fieldset">

          <legend className="uk-legend">Напишите нам</legend>

          <div className="uk-margin">
            <input className="uk-input" type="text" placeholder="Имя" required={true}/>
          </div>
          <div className="uk-margin">
            <input className="uk-input" type="text" placeholder="Email" required={true}/>
          </div>

          <div className="uk-margin">
            <textarea className="uk-textarea" rows="5" placeholder="Сообщение" required={true}></textarea>
          </div>

          <button className="buttons__send">Отправить</button>

        </fieldset>
      </form>
    )
  }
}

export default Form;