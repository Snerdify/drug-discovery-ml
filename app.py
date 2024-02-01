
# app.py
from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load the trained model
model = joblib.load('drug_discovery_model.joblib')

@app.route('/predict', methods=['POST'])
def predict():
    # Get input data from the request
    input_data = request.get_json()

    # Convert input data to DataFrame
    input_df = pd.DataFrame(input_data, index=[0])

    # Make a prediction using the loaded model
    prediction = model.predict(input_df)

    # Return the prediction as JSON
    return jsonify({'prediction': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)
