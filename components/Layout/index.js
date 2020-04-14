import Head from 'next/head';

const Layout = ({ children }) => (
  <div className="app">
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
        rel="stylesheet"
      />
    </Head>
    <main>
      <div className="main__wrapper">{children}</div>
    </main>
    <style jsx>{`
      .app {
        font-family: 'Fira Code', monospace;
        font-weight: 400;
      }

      .app main .main__wrapper {
        margin: 0 auto;
        max-width: 1200px;
      }
    `}</style>
  </div>
);

export default Layout;
