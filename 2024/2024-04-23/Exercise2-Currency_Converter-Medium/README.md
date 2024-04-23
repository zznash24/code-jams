# Exercise 2: Currency Converter (Difficulty: Medium)

## Objective

Develop a currency converter that leverages real-time exchange rates to convert amounts between various currencies.

## Detailed Requirements

### User Interface

Implement an HTML page with:

- Two dropdown menus for selecting the source and target currencies.
- An input field to enter the amount to be converted.
- A display area or another input field where the converted amount will be shown.
- Ensure the interface is user-friendly and visually appealing.

### Functionality

- Use JavaScript or TypeScript to add interactive behavior to the web page.
- When the user selects currencies and enters an amount, fetch the exchange rate using a public API like ExchangeRate-API.
- Calculate the converted amount using the fetched exchange rate and display it in real time.

### API Interaction

- Fetch live exchange rates from the ExchangeRate-API or a similar service.
- Handle API responses properly and update the UI accordingly.
- Implement error handling to manage scenarios where the API is down or returns an error.

### Additional Features

- Provide a 'swap' button to easily switch between the source and target currencies.
- Implement caching mechanisms to store the fetched exchange rates for a short duration to minimize API calls.

### Testing

- Test the application for different edge cases, such as invalid input values, network failures, and rapid currency switching.
