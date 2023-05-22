"use client";
import React from "react";
import { useState } from "react";

import { fetchKpiYearData } from "../api/kpiCalculatorData";
import { buildKpiYearQuery } from "../api/kpiCalculatorData";

interface FormData {
  startValue: string;
  startYear: string;
  startMonth: string;
  endYear: string;
  endMonth: string;
}

const KPICalcForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    startValue: "",
    startYear: "2021",
    startMonth: "",
    endYear: "2022",
    endMonth: "",
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

    fetchKpiYearData(
      buildKpiYearQuery(formData.startYear, formData.endYear)
    ).then(() => {
      console.log("Fetched KPI Year");
    });
  };

  return (
    //TODO: Refactor form fields into separate component to avoname repeating code.
    <form onSubmit={handleSubmit}>
      <p>
        <label>Skriv inn beløp </label>
        <input
          type="text"
          name="startValue"
          value={formData.startValue}
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
  );
};

export default KPICalcForm;
