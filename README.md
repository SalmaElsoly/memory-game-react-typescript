# Memory Game

This is a simple memory game built with React and TypeScript. The game involves flipping over two hidden cards at a time to find a matching pair.

## Project Structure

The main component of the game is the Board component, which is responsible for rendering the game board and handling the game logic.

Here's a brief overview of the key files and their roles:

- `Board.tsx`: This is the main component of the game. It uses the `useGameLogic` hook to manage the game state and handle user interactions.
- `Card.tsx`: This component represents a single card on the board. It receives its state and actions from the Board component.
- `useGameLogic.ts`: This is a custom hook that encapsulates the game logic. It manages the state of the cards and provides actions to flip cards and check for matches.
- `GameContext.ts`: This file sets up a React context for the game. It's used to share the game state and actions with other components.
- `types.ts`: This file contains TypeScript interfaces and type definitions used throughout the project.

## Setup

To run the game locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies with `npm install`.
4. Start the development server with `npm start`.
5. Open your browser and navigate to `http://localhost:3000` to play the game.

## Gameplay

The game starts with all cards face down. Click on a card to flip it over. Then click on a second card. If the two cards match, they will remain face up. If they don't match, they will flip back over. The goal of the game is to find all matching pairs.

## Customization

You can customize the number of cards on the board by passing a `cardsNumber` prop to the Board component. The game supports 4, 8, and 16 cards to match.
