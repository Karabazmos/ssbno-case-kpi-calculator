const kpiYearDatasetURL = "https://data.ssb.no/api/v0/no/table/08184";

export function buildKpiYearQuery(startValue: string, endValue: string) {
  return {
    query: [
      {
        code: "ContentsCode",
        selection: {
          filter: "item",
          values: ["KpiAar"],
        },
      },
      {
        code: "Tid",
        selection: {
          filter: "",
          values: [startValue, endValue],
        },
      },
    ],
    response: {
      format: "json-stat",
    },
  };
}

export async function fetchKpiYearData(query: Object) {
  const res = await fetch(kpiYearDatasetURL, {
    method: "POST",
    headers: {
      Accept: "text/html",
    },
    body: JSON.stringify(query),
  });

  return res.json();
}

const kpiMonthDatasetURL = "https://data.ssb.no/api/v0/no/table/08981";
const kpiMonthQuery = {
  query: [
    {
      code: "Maaned",
      selection: {
        filter: "all",
        values: ["*"],
      },
    },
    {
      code: "ContentsCode",
      selection: {
        filter: "item",
        values: ["KpiIndMnd"],
      },
    },
    {
      code: "Tid",
      selection: {
        filter: "all",
        values: ["*"],
      },
    },
  ],
  response: {
    format: "json-stat",
  },
};

export async function fetchKpiMonthData() {
  const res = await fetch(kpiMonthDatasetURL, {
    method: "POST",
    headers: {
      "Cache-Control": "no-cache",
      Accept: "text/html",
    },
    body: JSON.stringify(kpiMonthQuery),
  });

  return res.json();
}
