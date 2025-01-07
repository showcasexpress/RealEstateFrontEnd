const config = {
  baseAPIurl: "https://localhost:4000/api",
};

const currencyFormatter = Intl.NumberFormat("en-US",
  {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0
  }
)

export {currencyFormatter};
export default config;
