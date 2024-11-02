import { Navbar, Footer } from '@layout';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
