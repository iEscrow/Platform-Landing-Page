import AppRoutes from './routes/AppRoutes';
import Navbar from '@layout/navbar/Navbar';
import Footer from '@layout/footer/Footer';

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
