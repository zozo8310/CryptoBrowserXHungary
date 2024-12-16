from flask import Flask, jsonify
import os

app = Flask(__name__)

# Alap Flask végpont
@app.route("/")
def home():
    return jsonify({"message": "Flask API működik!"})

# Dinamikus AI modul végpontok
@app.route("/api/<module_name>")
def ai_module(module_name):
    ai_responses = {
        "developer": "Developer AI: Fejlesztési feladat sikeresen végrehajtva!",
        "analyst": "Analyst AI: Elemzés kész, adatok feldolgozva.",
        "creative": "Creative AI: Új tartalom sikeresen létrehozva.",
        "automation": "Automation AI: Automatizáció elindítva.",
        "advisor": "Advisor AI: Tanácsadás biztosítva a feladatokhoz."
    }

    response = ai_responses.get(module_name, "Ismeretlen AI modul.")
    return jsonify({"message": response})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, host="0.0.0.0", port=port)
