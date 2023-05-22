## Case Study

The users of ssb.no wants an application that allows them to calculate how much the value of the currency (NOK) has changed over time. The basis for the computations are the monthly consumer price indices from Statistics Norway. [`Here are some examples of calculations.`](https://www.ssb.no/priser-og-prisindekser/regneeksempler#Utregning_av_prosentvis_endring) These are the acceptance criterias that must be fullfilled:

- Users must be able to input an amount/price
- Users must be able to pick a year and choose a month or yearly average for the date range
- All fields must be filled
- Users must be presented with the results of the computation after pressing a button
- The results must include the new amount/price of the currency and the increase in percentage

We will be prepping a few things for you by using NextJs, you may refactor and make as many adjustments as you'd like.

**Optional tasks:**

- Error handling for data fetching
- Form validation
- Testing (e.g. functional, non-functional)
- Visualization (e.g. highcharts)
- Universal design and accessibility
  - Does your solution follow design and accessibility principles? (e.g. WCAG)
- Bonus: Authentication
  - Add login and authorization to your application

### Resources

There are two versions of the inflation calculator, where the calculator at the front page is a simpler version:
[`Link to SSB's Front Page`](https://www.ssb.no/)
[`Link to SSB's Inflation Calculator Page`](https://www.ssb.no/kalkulatorer/priskalkulator)

[`Link to SSB's API Page`](https://www.ssb.no/api)

You may use the components from our design system, or use your own styling for the calculator:
[`Link to SSB's Component Library Repository`](https://github.com/statisticsnorway/ssb-component-library)

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Test
