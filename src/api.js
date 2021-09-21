import Papa from 'papaparse'

const CSV_URL = 'https://gist.githubusercontent.com/simonlast/d5a86ba0c82e1b0d9f6e3d2581b95755/raw/f608b9b896dd3339df13dae317998d5f24c00a50/edu-scorecard.csv'

export function fetchData() {
  return fetch(CSV_URL)
    .then(response => response.text())
    .then(text => {
      const { data } = Papa.parse(text)
      // Removing first row
      data.shift()
      return data
    })
}
