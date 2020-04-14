import Layout from '../components/Layout';

const Index = () => (
  <Layout>
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
    <style jsx>{`
      a {
        color: #000;
      }
    `}</style>
  </Layout>
);

export default Index;
