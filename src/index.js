import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider  } from 'antd';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import es_ES from 'antd/es/locale/es_ES';
import moment from 'moment';
import 'moment/locale/es';

moment.locale('es')

ReactDOM.render(
  <ConfigProvider  locale={es_ES}>
      <App style={{marginLeft: "50px"}}/>
    </ConfigProvider >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
