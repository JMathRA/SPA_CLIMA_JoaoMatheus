import React from 'react';
import styles from './CardClima.module.css';

const CardClima = (props) => {
  return (
    <div className={styles.wrapper}>
      <h1>DADOS DO CLIMA DA CIDADE</h1>
      <p>Temperatura: {props.dados.main.feels_like} °C</p>
      <p>Presão atmosférica (nível do mar): {props.dados.main.pressure} hPa</p>
      <p>Umidade: {props.dados.main.humidity} %</p>
      <p>Temperatura mínima: {props.dados.main.temp_min} °C</p>
      <p>Temperatura máxima: {props.dados.main.temp_max} °C</p>
    </div>
  );
};

export default CardClima;
