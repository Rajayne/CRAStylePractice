# Exercise Guide

1. Npx create-react-app cra-style-practice
2. Delete everything inside of the src/ directory

## Requirements»

Create three JavaScript files:

### src/helpers.js

This file should export two array helper functions:

- choice(items): returns a randomly selected item from array of items
- remove(items, item): removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.

### src/foods.js

This file should export this array of fruits:

> ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍎", "🍏", "🍐", "🍒", "🍓", "🥝", "🍅", "🥑" ];

### src/index.js

This file should import the fruits and both array helpers. It should then:

1. Randomly draw a fruit from the array
2. Log the message “I’d like one RANDOMFRUIT, please.”
3. Log the message “Here you go: RANDOMFRUIT”
4. Log the message “Delicious! May I have another?”
5. Remove the fruit from the array of fruits
6. Log the message “I’m sorry, we’re all out. We have FRUITSLEFT left.”

> **Testing:** Run this with npm start and you should see something like this in your browser console:
> I'd like one 🍉, please
> Here you go: 🍉
> Delicious! May I have another?
> I'm sorry, we're all out. We have 14 left.
