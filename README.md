# We Music

We Music is a web application developed as part of the Addis Software Internship Program. It allows users to fetch songs from an API, add new songs, and edit existing ones. The application utilizes Redux and Redux Saga for state management and handling asynchronous operations.

## Features

- Fetch songs from an external API.
- Add new songs to the collection.
- Edit existing songs.
- Uses Redux for state management.
- Utilizes Redux Saga for handling asynchronous actions.

## Technologies Used

- React.js
- Redux
- Redux Saga
- HTML/CSS
- JavaScript (jsx)

## Setup

To run the We Music application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running:

    ```
    npm install
    ```

4. Start the development server:

    ```
    npm run dev
    ```

## Usage

- Upon loading the application, you will see a list of songs fetched from an external API.
- To add a new song, click on the song and the details will be previewed on the right side of the page
- To edit an existing song, click on the "Edit" button next to the song you wish to modify and update the details in the form.
- Changes made to the songs will be reflected immediately in the UI and persisted in the application's state.
