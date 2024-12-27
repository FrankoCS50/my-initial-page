
=======
# My Initial Browser Page

This is a simple custom start page for my web browser. It features a search bar, a welcome message, a random quote, and links to Google apps.

## Features

*   **Personalized Greeting:** Displays a welcome message with the user's name (stored locally).
*   **Search Functionality:** Includes a search bar that redirects to Google Search.
*   **Random Quotes:** Shows a random quote from a JSON file (`agostino_quotes.json`).
*   **Google Apps Link:** Provides a quick link to Google's product page.
*   **Responsive Design:** Adapts to different screen sizes.

## Technologies Used

*   HTML
*   CSS
*   JavaScript
*   JSON (for quotes)

## Setup/Installation

1.  Clone the repository:

    ```bash
    git clone [https://github.com/YourUsername/your-repository-name.git](https://github.com/YourUsername/your-repository-name.git)
    ```

2.  (Optional) If you want to run it locally without a web server: Open the `index.html` file in your browser. Note that fetching the JSON file might not work due to CORS restrictions when opening directly from the file system.

## Usage

*   Open `index.html` in your web browser.
*   Enter your name when prompted (it will be stored locally).
*   Use the search bar to search on Google.
*   Enjoy the daily quote!

## Customization

*   **Quotes:** You can customize the quotes by editing the `agostino_quotes.json` file. Make sure the file is correctly formatted as JSON and contains an array of objects, each with `text` and `author` properties.
*   **Styling:** Modify the `style.css` file to change the appearance of the page.
*   **Background:** Change the background image by replacing `images/sfondo.jpg` with your own image.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## Credits

*   The design is inspired by the Google homepage.

## License

MIT License
>>>>>>> 97da8be (Initial commit)
