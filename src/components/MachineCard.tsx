import React, {useState} from 'react';
import {ProgressCircle} from './ProgressCircle';
import type {Machine} from '../types';

const MachineCard: React.FC<Machine> = ({percentage, operator, isFirst}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`machine-card ${hovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="machine-header">
        <span className="date">2-3-14</span>
        <span className="machine-name">Токарная с ЧПУ 4</span>
      </div>
      <div className="progress-container">
        <ProgressCircle percentage={percentage} isFirst={isFirst}/>
      </div>
      <div className="operator">{operator}</div>
    </div>
  );
};

export default MachineCard;