import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <span></span>
          <NavLink to="/biografia">Biografia</NavLink>
        </li>
        <li>
          <span></span>
          <NavLink to="/campanhas-publicitarias">
            Campanhas Publicitárias
          </NavLink>
        </li>
        <li>
          <span></span>
          <NavLink to="/contato">Contato</NavLink>
        </li>
      </ul>
    </nav>
  );
};
