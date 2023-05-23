"use client";
import React from "react";
import { useState } from "react";

import { fetchKpiMonthData } from "../api/kpiCalculatorData";
import { buildKpiQuery } from "../api/kpiCalculatorData";
import CalculationResult from "./CalculationResult";

interface FormData {
  operand: string;
  startYear: string;
  startMonth: string;
  endYear: string;
  endMonth: string;
}

interface APIResponse {
  dataset: {
    value: number[];
  };
}

interface KPIData {
  startValue: number | undefined;
  endValue: number | undefined;
}

const KPICalcForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    operand: "",
    startYear: "2021",
    startMonth: "",
    endYear: "2022",
    endMonth: "",
  });

  const [kpiData, setKpiData] = useState<KPIData>({
    startValue: 0,
    endValue: 0,
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

    fetchKpiMonthData(
      buildKpiQuery(
        formData.startYear,
        formData.startMonth,
        formData.endYear,
        formData.endMonth
      )
    ).then((response: APIResponse) => {
      setKpiData(() => ({
        startValue: response.dataset.value[0],
        endValue: response.dataset.value.at(-1),
      }));
    });
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
          <label>Velg måned </label>
          <input
            type="text"
            name="startMonth"
            value={formData.startMonth}
            onChange={handleFormInput}
            required
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
          <label>Velg måned </label>
          <input
            type="text"
            name="endMonth"
            value={formData.endMonth}
            onChange={handleFormInput}
            required
          />
        </p>
        <p>
          <button type="submit">Se prisendring</button>
        </p>
      </form>
      <CalculationResult {...kpiData} />
    </div>
  );
};

export default KPICalcForm;
