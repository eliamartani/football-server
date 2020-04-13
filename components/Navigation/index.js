import Link from 'next/link';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a title="Home page">Home</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
