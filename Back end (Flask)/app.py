from flask import Flask, jsonify, render_template
import json
import random

app = Flask(__name__)

# Loading data from flags.json as NoSQL database
def load_flags_data(filename="flags.json"):
    with open(filename, "r", encoding="utf-8") as file:
        return json.load(file)

@app.route("/api/random_flag")
def random_flag():
    flags = load_flags_data()
    flag = random.choice(flags)
    return jsonify(flag)

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
