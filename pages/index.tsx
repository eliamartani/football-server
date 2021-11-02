import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>football-server</title>
        <link rel="icon" href="./favicon.png" />
      </Head>

      <h1>
        football-server <i>api</i>
      </h1>

      <p>
        Fork the project at{' '}
        <a href="https://github.com/eliamartani/football-server" rel="noopener">
          github
        </a>
        .
      </p>

      <ul>
        <li>/api/teams</li>
        <li>/api/teams/:teamId</li>
        <li>/api/logos/:teamId</li>
        <li>/api/weeks</li>
        <li>/api/weeks/:weekIndex</li>
      </ul>

      <p>
        I just made an <i>https</i> version of it.
      </p>
    </>
  );
};

export default Home;
