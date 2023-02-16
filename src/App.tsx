import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Section } from './components/Section';

export const App = () => {
  return (
    <div className="container">
      <Header />
      <Nav />
      <Section />
      <Footer />
    </div>
  );
};
