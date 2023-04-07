import React, { useState } from 'react';
import Plot from 'react-plotly.js';

function generateData() {
  var data = [];
  var rows = 10;
  var columns = 10;
  for (var i = 0; i < rows; i++) {
    var row = [];
    for (var j = 0; j < columns; j++) {
      row.push(Math.random());
    }
    data.push(row);
  }
  return data;
}

function App() {
  const [data, setData] = useState(generateData());

  const handleClick = () => {
    setData(generateData());
  };

  return (
    <div>
      <Plot
        data={[{ z: data, type: 'surface' }]}
        layout={{ width: 600, height: 600, title: 'Plotly.js in React' }}
      />
      <button onClick={handleClick}>Mettre à jour</button>
    </div>
  );
}

export default App;
