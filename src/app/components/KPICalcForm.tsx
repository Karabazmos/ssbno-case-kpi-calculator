"use client";
import React from "react";
import { useState } from "react";

interface FormData {
  fieldAmount: string;
  fieldFromYear: number;
  fieldMonth1: string;
  fieldToYear: number;
  fieldMonth2: string;
}

const KPICalcForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fieldAmount: "",
    fieldFromYear: 2023,
    fieldMonth1: "",
    fieldToYear: 2023,
    fieldMonth2: "",
  });

  const handleFormInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    //TODO: Refactor form fields into separate component to avoid repeating code.
    <form>
      <p>
        <label>Skriv inn beløp </label>
        <input
          type="text"
          id="amount"
          name="fieldAmount"
          value={formData.fieldAmount}
          onChange={handleFormInput}
          required
        />
      </p>
      <p>
        <label>Fra år (åååå) </label>
        <input
          type="text"
          id="fromYear"
          name="fieldFromYear"
          value={formData.fieldFromYear}
          onChange={handleFormInput}
          required
        />
        <label>Velg måned </label>
        <input
          type="text"
          id="fromMonth"
          name="fieldMonth1"
          value={formData.fieldMonth1}
          onChange={handleFormInput}
          required
        />
      </p>
      <p>
        <label>Til år (åååå) </label>
        <input
          type="text"
          id="fieldToYear"
          name="toYear"
          value={formData.fieldToYear}
          onChange={handleFormInput}
          required
        />
        <label>Velg måned </label>
        <input
          type="text"
          id="toMonth"
          name="fieldMonth2"
          value={formData.fieldMonth2}
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
