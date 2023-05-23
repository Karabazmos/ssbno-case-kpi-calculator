import React, { useEffect } from "react";
import { useState } from "react";

interface KPIValues {
  startValue: number | undefined;
  endValue: number | undefined;
}

interface ResultState {
  showResult: boolean;
  inflationPercentage: number | undefined;
  inflatedValue: number | undefined;
}

const calculateInflation = (startValue: number, endValue: number) => {
  const inflationPercentage =
    (Math.abs(startValue - endValue) * 100) / endValue;
  const inflatedValue = (startValue * inflationPercentage) / 100;
  return [inflationPercentage, startValue + inflatedValue];
};

const CalculationResult: React.FC<KPIValues> = (props) => {
  const [resultState, setResultState] = useState<ResultState>({
    showResult: false,
    inflationPercentage: 0,
    inflatedValue: 0,
  });

  useEffect(() => {
    if (props.startValue && props.endValue) {
      const [inflationPercentage, inflatedValue] = calculateInflation(
        props.startValue,
        props.endValue
      );
      setResultState(() => ({
        inflationPercentage: inflationPercentage,
        inflatedValue: inflatedValue,
        showResult: true,
      }));
    }
  }, [props.startValue, props.endValue]);

  return (
    <div>
      {resultState.showResult && (
        <section>
          <p>
            {" "}
            Stigning i prosent: {resultState.inflationPercentage?.toFixed(1)} %
          </p>
          <p>Ny verdi: {resultState.inflatedValue?.toFixed(1)} kr</p>
        </section>
      )}
    </div>
  );
};

export default CalculationResult;
