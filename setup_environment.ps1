# 1. Ellenőrzi, hogy a Python telepítve van-e
Write-Host "Python telepítésének ellenőrzése..." -ForegroundColor Cyan
$pythonCheck = python --version 2>&1
if ($pythonCheck -match "Python") {
    Write-Host "Python telepítve van: $pythonCheck" -ForegroundColor Green
} else {
    Write-Host "Python nincs telepítve! Kérlek telepítsd a Python 3.11-et a https://www.python.org/downloads/ oldalról." -ForegroundColor Red
    exit
}

# 2. PyAudio telepítése előre fordított bináris letöltésével
Write-Host "PyAudio telepítésének előkészítése..." -ForegroundColor Cyan
$pyaudioUrl = "https://github.com/intxcc/pyaudio_portaudio/releases/download/1.0/PyAudio-0.2.11-cp311-cp311-win_amd64.whl"
$pyaudioFile = "$PSScriptRoot\PyAudio-0.2.11-cp311-cp311-win_amd64.whl"

Write-Host "PyAudio bináris letöltése: $pyaudioUrl" -ForegroundColor Yellow
Invoke-WebRequest -Uri $pyaudioUrl -OutFile $pyaudioFile -UseBasicParsing

Write-Host "PyAudio telepítése..." -ForegroundColor Cyan
pip install $pyaudioFile

# 3. Python csomagok telepítése
Write-Host "Szükséges Python csomagok telepítése..." -ForegroundColor Cyan
pip install flask pyautogui gtts speechrecognition

# 4. Projekt fájlok és mappák létrehozása
Write-Host "Projekt fájlok és mappák létrehozása..." -ForegroundColor Cyan
$projectRoot = "D:\CryptoBrowserXHungary"
$aiControllerPath = "$projectRoot\ai_controller"
$stylePath = "$projectRoot\style"
$rendererPath = "$projectRoot\renderer"
$preloadPath = "$projectRoot\preload"

# Mappák létrehozása
New-Item -ItemType Directory -Force -Path $aiControllerPath
New-Item -ItemType Directory -Force -Path $stylePath
New-Item -ItemType Directory -Force -Path $rendererPath
New-Item -ItemType Directory -Force -Path $preloadPath

# Python fájl létrehozása
$pythonFile = "$aiControllerPath\ai_controller.py"
@"
from flask import Flask, request, jsonify
import os
import pyautogui
from gtts import gTTS
import speech_recognition as sr

app = Flask(__name__)

@app.route('/execute-task', methods=['POST'])
def execute_task():
    data = request.json
    task = data.get('task')
    params = data.get('parameters', {})

    try:
        if task == "delete_file":
            file_path = params.get('file_path')
            if os.path.exists(file_path):
                os.remove(file_path)
                return jsonify({"status": "success", "details": f"File {file_path} deleted."})
            elif task == "create_file":
                file_path = params.get('file_path')
                content = params.get('content', "")
                with open(file_path, 'w') as f:
                    f.write(content)
                return jsonify({"status": "success", "details": f"File {file_path} created."})
            else:
                return jsonify({"status": "failure", "details": "Unknown task."})
    except Exception as e:
        return jsonify({"status": "failure", "details": str(e)})

@app.route('/speak', methods=['POST'])
def speak():
    data = request.json
    text = data.get('text', "")
    
    # Szöveg beszéddé alakítása
    tts = gTTS(text, lang='hu')
    tts.save("output.mp3")
    os.system("start output.mp3")
    return jsonify({"status": "success", "details": "AI beszélt."})

@app.route('/listen', methods=['GET'])
def listen():
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print("Hallgatlak...")
        audio = recognizer.listen(source)
    
    try:
        text = recognizer.recognize_google(audio, language="hu-HU")
        return jsonify({"status": "success", "recognized_text": text})
    except sr.UnknownValueError:
        return jsonify({"status": "failure", "details": "Nem értem a beszédet."})
    except sr.RequestError as e:
        return jsonify({"status": "failure", "details": str(e)})

@app.route('/get-status', methods=['GET'])
def get_status():
    return jsonify({"status": "idle", "last_task": "None"})

if __name__ == '__main__':
    app.run(debug=True)
"@ > $pythonFile

Write-Host "Projekt létrehozása befejeződött!" -ForegroundColor Green
