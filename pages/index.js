import Layout from '../components/Layout';

const Index = () => (
  <Layout>
    <h1>football-server</h1>
    <h2>`https` version</h2>
    <ul>
      <li>/teams</li>
      <li>/teams/:teamId</li>
      <li>/logos/:teamId</li>
      <li>/weeks</li>
      <li>/weeks/:weekIndex</li>
    </ul>
  </Layout>
);

export default Index;
