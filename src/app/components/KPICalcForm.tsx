"use client";
import React from "react";
import { useState } from "react";

import { fetchKpiMonthData, fetchKpiYearData } from "../api/kpiCalculatorData";
import { buildKpiQuery } from "../api/kpiCalculatorData";
import CalculationResult from "./CalculationResult";
import MonthSelect from "./MonthSelect";

interface FormData {
  operand: string;
  startYear: string;
  startMonth: string | undefined;
  endYear: string;
  endMonth: string | undefined;
}

interface APIResponse {
  dataset: {
    value: number[];
  };
}

interface CalculationVariables {
  startKpi: number | undefined;
  endKpi: number | undefined;
  originalValue: number | undefined;
}

const KPICalcForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    operand: "",
    startYear: "2021",
    startMonth: "",
    endYear: "2022",
    endMonth: "",
  });

  const [calcVariables, setCalcVariables] = useState<CalculationVariables>({
    startKpi: 0,
    endKpi: 0,
    originalValue: 0,
  });

  const handleFormInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (formData.startMonth && formData.endMonth) {
      fetchKpiMonthData(
        buildKpiQuery(
          formData.startYear,
          formData.startMonth,
          formData.endYear,
          formData.endMonth
        )
      ).then((response: APIResponse) => {
        setCalcVariables(() => ({
          startKpi: response.dataset.value[0],
          endKpi: response.dataset.value.at(-1),
          originalValue: parseInt(formData.operand),
        }));
      });
    } else {
      fetchKpiYearData(
        buildKpiQuery(
          formData.startYear,
          undefined,
          formData.endYear,
          undefined
        )
      ).then((response: APIResponse) => {
        console.log("Fetched KPI year.");
        setCalcVariables(() => ({
          startKpi: response.dataset.value[0],
          endKpi: response.dataset.value[1],
          originalValue: parseInt(formData.operand),
        }));
      });
    }
  };

  return (
    //TODO: Refactor form fields into separate component to avoname repeating code.
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Skriv inn beløp </label>
          <input
            type="text"
            name="operand"
            value={formData.operand}
            onChange={handleFormInput}
            required
          />
        </p>
        <p>
          <label>Fra år (åååå) </label>
          <input
            type="text"
            name="startYear"
            value={formData.startYear}
            onChange={handleFormInput}
            required
          />
          <label> Velg måned (valgfritt) </label>
          <input
            type="text"
            name="startMonth"
            value={formData.startMonth}
            onChange={handleFormInput}
          />
        </p>

        <p>
          <label>Til år (åååå) </label>
          <input
            type="text"
            name="endYear"
            value={formData.endYear}
            onChange={handleFormInput}
            required
          />
          <label> Velg måned (valgfritt) </label>
          <input
            type="text"
            name="endMonth"
            value={formData.endMonth}
            onChange={handleFormInput}
          />
        </p>
        <p>
          <button type="submit">Se prisendring</button>
        </p>
      </form>
      <CalculationResult {...calcVariables} />
    </div>
  );
};

export default KPICalcForm;
