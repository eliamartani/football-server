import Layout from '../components/Layout';

const PageNotFound = () => (
  <Layout>
    <h1>unavailable page</h1>
    <p>
      Go to <a href="/">root page</a>.
    </p>
    <style jsx>{`
      a {
        color: #000;
      }
    `}</style>
  </Layout>
);

export default PageNotFound;
