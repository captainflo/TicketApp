import { Link } from 'react-router-dom';

const Header = ({ currentUser }) => {
  const links = [
    !currentUser && { label: 'Sign Up', href: '/signup' },
    !currentUser && { label: 'Sign In', href: '/signin' },
    currentUser && { label: 'Sell Tickets', href: '/tickets/new' },
    currentUser && { label: 'My Orders', href: '/orders' },
    currentUser && { label: 'User', href: `/user/${currentUser._id}` },
    currentUser && { label: 'Sign Out', href: '/signout' },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} className="nav-item">
          <Link to={href}>
            <span className="nav-link">{label}</span>
          </Link>
        </li>
      );
    });

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <Link to={'/'}>
        <span className="navbar-brand">Logo</span>
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto"></ul>
        <div className="d-flex justify-content-end">
          <ul className="nav ">{links}</ul>
        </div>
      </div>
    </nav>
    // <nav className="navbar  navbar-light bg-light shadow-sm">
    //   <Link to={'/'}>
    //     <span className="navbar-brand">Logo</span>
    //   </Link>
    //   <button
    //     class="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarText"
    //     aria-controls="navbarText"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span class="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="d-flex justify-content-end" id="navbarText">
    //     <ul className="nav d-flex align-items-center">{links}</ul>
    //   </div>
    // </nav>
  );
};

export default Header;
