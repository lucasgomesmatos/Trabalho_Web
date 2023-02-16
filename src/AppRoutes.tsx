import { Route, Routes } from 'react-router-dom';
import { Biografia } from './page/Biografia';
import { CampanhasPublicitaria } from './page/CampanhasPublicitarias';
import { Contato } from './page/Contato';
import { Home } from './page/Home';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/biografia" element={<Biografia />} />
      <Route
        path="/campanhas-publicitarias"
        element={<CampanhasPublicitaria />}
      />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
};
