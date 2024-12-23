import AppRoutes from './routes/AppRoutes';
import { Navbar, Footer } from '@layout';

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
