let countries = [
    { name: 'United States', currency: 'US Dollar' },
    { name: 'Panama', currency: 'US Dollar' },
    { name: 'Ecuador', currency: 'US Dollar' },
    // Add more countries here...
  ];
  
  let currencyToFind = 'US Dollar';
  
  let countriesUsingCurrency = countries.filter(country => country.currency === currencyToFind);
  
  if (countriesUsingCurrency.length > 0) {
    console.log(`Countries that use ${currencyToFind} as currency:`);
    countriesUsingCurrency.forEach(country => {
      console.log(country.name);
    });
  } else {
    console.log(`No countries found that use ${currencyToFind} as currency.`);
  }
  