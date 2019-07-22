import React, { Component } from "react";
import Calendars from 'react-calendar';
import Conteudo from './Conteudo';

import './Calendar.css';

class Calendar extends Component {
  render() {
    return (
      <div>
        <div className="calendario">
          <Calendars />
        </div>
          <Conteudo />
      </div>
    );
  }
}

export default Calendar;