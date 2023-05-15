# Note
example- 'to' and "To" are considered as two different word in my code so count for 'to' is different and count for 'To' is different.

# Word Frequency Histogram

This is a React.js application that fetches the contents of a text file, calculates the frequency of occurrence of each word, and displays a histogram of the 20 most occurring words. It provides an option to download the histogram data as a CSV file.

## Components

The application consists of the following components:

- `App`: The main component that handles data fetching, word frequency calculation, and rendering of the histogram.
- `chartRef`: A React ref used to reference the HTML canvas element where the histogram is rendered.
- `histogramData`: A state variable that holds the histogram data.
- `fetchData`: An asynchronous function that fetches the text file and calculates word frequencies.
- `handleExport`: A function that generates a CSV file and triggers its download.

## Libraries Used

The following libraries are used in this project:

- React: A JavaScript library for building user interfaces.
- axios: A popular HTTP client for making requests to remote servers.
- Chart.js: A flexible JavaScript charting library for creating interactive charts.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Himesh-Maurya/word-frequency-histogram.git`
2. Change to the project directory: `cd word-frequency-histogram`
3. Install the dependencies: `npm install` 
4. Start the development server: `npm start`
5. Open your web browser and visit `http://localhost:3000` to view the application.



