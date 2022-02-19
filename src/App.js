import Home from './Pages/Home';
import { DashboardProvider } from './Context/DashboardContext';

function App() {
  return (
    <div>
    <DashboardProvider>
    <Home/>
    </DashboardProvider>
    </div>
  );
}

export default App;
