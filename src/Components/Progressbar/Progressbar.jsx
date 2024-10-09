import React, { useEffect, useState } from 'react';
import './CircularProgressBar.css';

const CircularProgressBar = ({ size, progress, strokeWidth }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0); // State for animated progress

  const radius = (size - strokeWidth) / 2; // Radius of the circle (size is the diameter, so divide by 2)
  const circumference = 2 * Math.PI * radius; // Circumference of the circle (2πr)
  const offset = circumference - (animatedProgress / 100) * circumference;  // Calculate stroke-dashoffset based on the progress percentage

  useEffect(() => {
    // Trigger the animation after component mounts
    const timeout = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100); // Delay before animation starts (optional)

    return () => clearTimeout(timeout); // Cleanup timeout on component unmount
  }, [progress]);

  return (
    <div className="circular-progress">
      <svg width={size} height={size} className="circular-progress-svg">
        <circle
          className="circular-progress-background"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          className="circular-progress-bar"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="progress-text">
        {animatedProgress}%
      </div>
    </div>
  );
};

export default CircularProgressBar;
