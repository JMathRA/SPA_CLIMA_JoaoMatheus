import React from 'react';
import CardClima from '../CardClima/CardClima';
import styles from './Home.module.css';

const Home = () => {
  const [cidade, setCidade] = React.useState('');
  const [dados, setDados] = React.useState(null);

  function getClimaCidade() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=464d2a747a083b09a2af42f370483d39&lang=pt_br&units=metric`,
    )
      .then((response) => response.json())
      .then((json) => {
        setDados(json);
      })
      .catch((err) => {
        // trata se alguma das promises falhar
        console.error('Failed retrieving information', err);
      });
  }

  // React.useEffect(() => {
  // }, []);

  function handleSubmit(event) {
    event.preventDefault();
    
    getClimaCidade();
    // console.log(dados);
  }

  return (
    <>
      <header className={styles.header}>
        <h2>Clima SPA - Joao Matheus</h2>
      </header>
      <main className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="cidade">
            Digite a cidade para efetuar a busca{' '}
          </label>
          <input
            id="cidade"
            className={styles.input}
            name="cidade"
            type="text"
            onChange={({ target }) => setCidade(target.value)}
            required
          />
          <button className={styles.button}>Buscar</button>
        </form>
        {dados && <CardClima dados={dados} />}
      </main>

      <footer className={styles.footer}>
        <p>Alguns direitos reservados. João Matheus Dev.</p>
      </footer>
    </>
  );
};

export default Home;
