import Navigation from '../Navigation';

const Layout = ({ children }) => (
  <>
    <header>
      <div className="header__wrapper">
        <Navigation />
      </div>
    </header>
    <main>
      <div className="main__wrapper">{children}</div>
    </main>
  </>
);

export default Layout;
