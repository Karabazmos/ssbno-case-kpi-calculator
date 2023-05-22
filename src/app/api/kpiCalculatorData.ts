const kpiYearDatasetURL = "https://data.ssb.no/api/v0/no/table/08184";

export function buildKpiQuery(
  startYear: string,
  startMonth: string,
  endYear: string,
  endMonth: string
) {
  return {
    query: [
      {
        code: "Maaned",
        selection: {
          filter: "item",
          values:
            startMonth === endMonth ? [startMonth] : [startMonth, endMonth],
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
          filter: "item",
          values: startYear === endYear ? [startYear] : [startYear, endYear],
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

export async function fetchKpiMonthData(query: Object) {
  const res = await fetch(kpiMonthDatasetURL, {
    method: "POST",
    headers: {
      Accept: "text/html",
    },
    body: JSON.stringify(query),
  });

  return res.json();
}
