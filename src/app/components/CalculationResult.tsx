import React, { useEffect } from "react";
import { useState } from "react";

interface KPIValues {
  startKpi: number | undefined;
  endKpi: number | undefined;
  originalValue: number | undefined;
}

interface ResultState {
  showResult: boolean;
  inflationPercentage: number | undefined;
  inflatedValue: number | undefined;
}

const calculateInflation = (
  startKpi: number,
  endKpi: number,
  originalValue: number
) => {
  const inflationPercentage = (Math.abs(startKpi - endKpi) * 100) / endKpi;
  const inflatedValue = (originalValue * inflationPercentage) / 100;
  console.log(inflatedValue);
  return [inflationPercentage, originalValue + inflatedValue];
};

const CalculationResult: React.FC<KPIValues> = (props) => {
  const [resultState, setResultState] = useState<ResultState>({
    showResult: false,
    inflationPercentage: 0,
    inflatedValue: 0,
  });

  useEffect(() => {
    if (props.startKpi && props.endKpi && props.originalValue) {
      const [inflationPercentage, inflatedValue] = calculateInflation(
        props.startKpi,
        props.endKpi,
        props.originalValue
      );
      setResultState(() => ({
        inflationPercentage: inflationPercentage,
        inflatedValue: inflatedValue,
        showResult: true,
      }));
    }
  }, [props.startKpi, props.endKpi, props.originalValue]);

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
