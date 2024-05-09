import './App.css';
import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Employee from './pages/employee/Employee';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './component/navbar/Navbar';



const Layout = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Navbar />
        <div>
          <Outlet />  
        </div>
      </div>
    </QueryClientProvider>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="employee" element={<Employee />} />
        </Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
