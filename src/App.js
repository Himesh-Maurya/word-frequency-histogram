
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

const App = () => {
  const chartRef = useRef(null);
  const [histogramData, setHistogramData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://www.terriblytinytales.com/test.txt');
      const content = response.data;
      const words = content.split(/\s+/); // Split content into words
      const wordCounts = {};
      words.forEach((word) => {
        wordCounts[word] = (wordCounts[word] || 0) + 1; // Count word occurrences
      });
      const sortedWords = Object.keys(wordCounts).sort(
        (a, b) => wordCounts[b] - wordCounts[a] // Sort words by occurrence count
      );
      const top20Words = sortedWords.slice(0, 20);
      const histogram = top20Words.map((word) => ({
        word,
        count: wordCounts[word],
      }));
      setHistogramData(histogram);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleExport = () => {
    if (!histogramData) return;
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      'Word,Frequency\n' +
      histogramData.map(({ word, count }) => `${word},${count}`).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'histogram.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (histogramData && chartRef.current) {
      const labels = histogramData.map(({ word }) => word);
      const data = histogramData.map(({ count }) => count);

      new Chart(chartRef.current, {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              label: 'Word Frequency',
              data,
              backgroundColor: 'rgba(75,192,192,0.6)',
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              barPercentage: 0, // Set bar width to 100% of the category width
              categoryPercentage: 0,
              maxTicksLimit: 5,
              precision: 0,
            },
          },
        },
      });
    }
  }, [histogramData]);

  return (
    <div>
      <button onClick={fetchData}>Submit</button>
      <canvas ref={chartRef} />
      {
        histogramData?<button onClick={handleExport}>Export</button>:''
      }
      
    </div>
  );
};

export default App;