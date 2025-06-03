import React, {useState} from 'react';
import {ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';
import Header from './components/Header';
import MachineCard from './components/MachineCard';
import {theme} from './styles/theme';
import './styles/index.css';
import {machines} from './mocks/machines.ts';
import {records} from './mocks/records.ts';

const App: React.FC = () => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const toggleRow = (index: number) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

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

        <div className="records-container">
          <h2>Учет простоев оборудования</h2>
          <div className="table-header">
            <div className="header-cell machine">Станок</div>
            <div className="header-cell operator">Оператор</div>
            <div className="header-cell reason">Причина простоя</div>
          </div>
          {records.map((record, index) => (
            <div
              key={index}
              className={`table-row ${record.reason ? 'has-reason' : ''} ${expandedRow === index ? 'expanded' : ''}`}
              onClick={() => record.reason && toggleRow(index)}
            >
              <div className="row-cell machine">{record.machine}</div>
              <div className="row-cell operator">{record.operator}</div>
              <div className="row-cell reason">
                {record.reason ? "Техническая" : "Нет данных"}
                {record.reason && expandedRow === index && (
                  <div className="reason-details">
                    <p>{record.reason}</p>
                    <button className="close-btn" onClick={(e) => {
                      e.stopPropagation();
                      setExpandedRow(null);
                    }}>×
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
