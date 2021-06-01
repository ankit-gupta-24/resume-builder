import React, { useEffect, useState } from "react";
import "../../assets/scss/statusbar.scss";

function StatusBar(props) {
  const [completedSteps, setCompletedSteps] = useState(props.completedSteps);
  let steps = [];
  for (let i = 1; i <= 10; i++) {
    steps.push(i);
  }

  useEffect(() => {
    setCompletedSteps(props.completedSteps);
  }, [props.completedSteps]);

  return (
    <div className="statusbar">
      {steps.map((step, idx) => {
        return (
          <div
            className={
              step < completedSteps
                ? "statusbar-item completed"
                : "statusbar-item not-completed"
            }
            key={idx}
            onClick={() => {
              props.setStep(step);
            }}
          >
            {step}
          </div>
        );
      })}
    </div>
  );
}

export default StatusBar;
