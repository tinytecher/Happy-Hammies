<!-- 
<img width="1183" alt="Screenshot" src="https://user-images.githubusercontent.com/79761202/197367630-8bf22818-178a-4a33-a92f-862dacbf5384.png">

# Getting Started 

App Creation:
npx create-react-app .
npm i react-router-dom

App Clone:
npm install

A simple website I'm using to practice using React, React router and CSS animations.

Goals:
- Continue working on CSS for each pages and make fully responsive.
- Add a small database to collect hamster stats -->

# Happy Hamies App

Welcome to the Happy Hamies app, where hamster lovers can enjoy animations and learn more about their adorable pets. This app is built using React.js and React Router.

## Getting Started

### Clone and Run the App

To get the Happy Hamies app up and running on your local machine, follow these steps:

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/your-username/react_happy_hamies.git
    cd react_happy_hamies
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Run the Development Server:**

    ```bash
    npm start
    ```

    This will start the development server and automatically open the app in your default web browser.

4. **Explore the App:**

    Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to see the Happy Hamies app in action!

### Available Routes

- `/`: Home page.
- `/about`: Learn more about the project and its purpose.
- `/hamsters`: View a list of hamsters.
- `/hamsters/:id`: View details of a specific hamster.
- `/todo`: Manage your hamster-related to-do list.

## Setup from Scratch

If you're interested in setting up a similar project from scratch, here's a step-by-step guide:

1. **Initialize React Project:**

    ```bash
    npx create-react-app react_happy_hamies
    cd react_happy_hamies
    ```

2. **Install Dependencies:**

    ```bash
    npm install react-router-dom
    ```

3. **Create Components:**

    Create the necessary components in the `src/components` directory, such as `Home`, `About`, `Hamsters`, `HamsterDetails`, and `Input`. Populate them with relevant content
