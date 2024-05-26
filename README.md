# Happy Hamies App

![Screenshot](https://i.imgur.com/cCl6rJ1.png)

Welcome to the Happy Hamies app, where hamster lovers can enjoy animations and learn more about their adorable pets. This app is built using React.js and React Router.

## Deployed on Netlify

[Visit Happy Hammies]([https://happy-hammies.netlify.app](https://react-happy-hammies.netlify.app/))

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
- `/Adopt`: View a list of hamsters to adopt.
- `/hamsters/:id`: View details of a specific hamster.
- `/contact`: View contact details.

  

## Setup from Scratch

If you're interested in setting up a similar project from scratch, here's a basic guide:


1. **Initialize React Project:**

    ```bash
    npx create-react-app react_happy_hamies
    cd react_happy_hamies
    ```

2. **Install Dependencies:**

    ```bash
    npm install react-router-dom
    ```


## Project Structure

The project is organised into the following directories:

- `src/components`: Contains various React components used to build the app's UI.
    - `About`: Component for the about page.
    - `AdoptPage`: Component for the hamster adoption page.
    - `App`: Main app component.
    - `HamsterDetails`: Component for displaying details of a specific hamster.
    - `Hero`: Component for the hero section.
    - `NavBar`: Component for the navigation bar..


## Final Notes

1. **CSS Modules:**

    I have utilized CSS Modules to enhance the styling and organization of my project, resulting in a more structured and manageable styling approach.

2. **Deployment Troubleshooting:**

    During the deployment process to Netlify, I encountered some errors. After several attempts using various methods to import images into React.js, including experimenting with `require()`, I discovered a solution by relocating the required images directly into the `components` folder. This approach, as opposed to keeping the images in a separate folder, resolved the issue I was facing.

    Additionally, I addressed a warning about the outdated CanIUse database by updating it using the following command:

    ```bash
    npx update-browserslist-db@latest
    ```

4. **Stretch Goals:**

    - Investigate the root cause of the image path issue and explore alternative approaches to importing and rendering multiple images in React from a .js file.
    - Enhance CSS styles and ensure responsiveness across all pages.
      - inc Add burger menu for nav
    - Continue the conversion of pixel values to rems / ems for improved scalability.
    - Further refine the content of the contact page to provide comprehensive details.
    - Implement a form on the donate page for a more interactive user experience.


