# Design Patterns in TypeScript

This project demonstrates the implementation of various design patterns using TypeScript. Currently, it includes examples of:
- Builder Pattern
- Singleton Pattern

## Project Setup

### Prerequisites
- Node.js
- TypeScript

### Installation
1. Clone the repository
2. Install dependencies:

npm install

### Running the Project
- Development mode: `npm run dev`
- Production build: `npm run start` 
- Linting: `npm run lint`

## Design Patterns Implemented

### Builder Pattern
Located in `src/builder-pattern/`, this implementation demonstrates:
- Separation of complex object construction from its representation
- Same construction process that can create different representations
- Components:
  - Builder Interface (`interface_builder.ts`)
  - Concrete Builder (`concrete_builder.ts`) 
  - Director (`director.ts`)
  - Product (`product.ts`)

### Singleton Pattern
Located in `src/singleton/`, this implementation shows:
- Ensures a class has only one instance
- Provides a global point of access to that instance 
- Thread-safe implementation in TypeScript

## Project Structure
