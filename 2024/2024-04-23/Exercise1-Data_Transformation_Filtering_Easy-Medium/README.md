# Exercise 1: Data Transformation and User Filtering (Easy/Medium)

## Description

You're provided with an array of objects representing user data. Each object has the following properties:

- `name`: (string)
- `email`: (string)
- `age`: (number)
- `isActive`: (boolean)

## Tasks

1. **Transformation:** Write a function `formatUserData` that transforms this array into a new array of strings, where each string is formatted like "Name: [name], Email: [email]".

2. **Filtering:** Modify your function to only include users who are marked as active (`isActive: true`).

**Example:**

```javascript
const users = [
  { name: "Alice", email: "alice@example.com", age: 25, isActive: true },
  { name: "Bob", email: "bob@example.com", age: 30, isActive: false },
  { name: "Charlie", email: "charlie@example.com", age: 35, isActive: true },
];

function formatUserData(users) {
  // Your implementation here
}

const formattedData = formatUserData(users);
console.log(formattedData);
// Expected output:
// ["Name: Alice, Email: alice@example.com", "Name: Charlie, Email: charlie@example.com"]
```

## Variations to Increase Difficulty

- **Sorting:** After the transformation, sort the formatted strings alphabetically by name.
- **Optional Fields:** Make some of the fields in the user data optional (e.g., the user might not have an age). Handle these cases gracefully in your formatting function.

## Focus

- Array manipulation (filtering, mapping)
- String formatting
- Basic conditional logic
