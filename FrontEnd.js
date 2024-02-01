// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [features, setFeatures] = useState({});
  const [prediction, setPrediction] = useState(null);

  const handlePredict = async () => {
    try {
      await axios.post('http://localhost:5000/predict', features);
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error predicting:', error);
    }
  };

  return (
    <div>
      <h1>Drug Discovery</h1>
      <div>
        <label>Feature 1:</label>
        <input type="text" onChange={(e) => setFeatures({ ...features, feature1: e.target.value })} />
      </div>
      <div>
        <label>Feature 2:</label>
        <input type="text" onChange={(e) => setFeatures({ ...features, feature2: e.target.value })} />
      </div>
      {/* Add more input fields for features as needed */}
      <button onClick={handlePredict}>Predict</button>
      {prediction !== null && <p>Prediction: {prediction}</p>}
    </div>
  );
}

export default App;
