import Link from 'next/link';
import Layout from '../components/Layout';

const Index = () => (
  <Layout>
    <h1>football-server</h1>
    <h2>`https` version</h2>
    <ul>
      <li>
        <Link href="/api/teams">/api/teams</Link>
      </li>
      <li>
        <Link href="/api/teams/:teamId">/api/teams/:teamId</Link>
      </li>
      <li>
        <Link href="/api/logos/:teamId">/api/logos/:teamId</Link>
      </li>
      <li>
        <Link href="/api/weeks">/api/weeks</Link>
      </li>
      <li>
        <Link href="/api/weeks/:weekIndex">/api/weeks/:weekIndex</Link>
      </li>
    </ul>
  </Layout>
);

export default Index;
