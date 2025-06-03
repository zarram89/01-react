import React from 'react';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import type {ProgressCircleProps} from '../types';

export const ProgressCircle: React.FC<ProgressCircleProps> = ({
                                                                percentage, isFirst
                                                              }) => {
  if (isFirst) {
    return (
      <div className="css-circle"
           style={{
             background: `conic-gradient(#4CAF50 ${percentage * 3.6}deg, #e0e0e0 0)`,
           }}
      >
        <div
          className="circle-fill"
        />
        <div className="circle-text">{percentage}%</div>
      </div>
    );
  }

  return (
    <div className="interactive-circle">
      <CircularProgressbar
        className="progress-bar-custom"
        strokeWidth={20}
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          pathColor: '#4CAF50',
          trailColor: '#e0e0e0',
          textColor: '#333',
          textSize: '23px',
          pathTransition: 'stroke-dashoffset 0.5s ease 0s',
        })}

      />
    </div>
  );
};