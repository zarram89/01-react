import React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';
import Header from './components/Header';
import MachineCard from './components/MachineCard';
import {theme} from './styles/theme';
import './styles/index.css';
import {machines} from "./mocks/machines.ts";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className="app-container">
        <Header/>
        <div className="machines-grid">
          {machines.map((machine, index) => (
            <MachineCard
              key={index}
              percentage={machine.percentage}
              operator={machine.operator}
              isFirst={machine.isFirst}
            />
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
