import './App.css';
import Login from './component/pages/Login';
import { BrowserRouter, Router, Switch, Route, Routes } from 'react-router-dom';
import AuthLayout from './component/layout/AuthLayout';
import Register from './component/pages/Register';
import { createTheme, ThemeProvider} from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
import { blue } from '@mui/material/colors';


function App() {
  
  const theme = createTheme({
    palette: { primary: blue },
  });

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout/>} >
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
