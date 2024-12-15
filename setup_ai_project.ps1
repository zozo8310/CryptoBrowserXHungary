# Állítsd be az alap projekt mappát (ahol a fájlokat létre kell hozni)
$projectRoot = "D:\CryptoBrowserXHungary"

# AI Controller mappa és fájlok létrehozása
$aiControllerPath = "$projectRoot\ai_controller"
New-Item -ItemType Directory -Force -Path $aiControllerPath

# Python fő fájl létrehozása
$pythonFile = "$aiControllerPath\ai_controller.py"
@"
from flask import Flask, request, jsonify
import os
import pyautogui

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
            else:
                return jsonify({"status": "failure", "details": "File not found."})
        elif task == "create_file":
            file_path = params.get('file_path')
            content = params.get('content', "")
            with open(file_path, 'w') as f:
                f.write(content)
            return jsonify({"status": "success", "details": f"File {file_path} created."})
        elif task == "click":
            x = int(params.get('x', 0))
            y = int(params.get('y', 0))
            pyautogui.moveTo(x, y)
            pyautogui.click()
            return jsonify({"status": "success", "details": f"Mouse clicked at ({x}, {y})."})
        else:
            return jsonify({"status": "failure", "details": "Unknown task."})
    except Exception as e:
        return jsonify({"status": "failure", "details": str(e)})

@app.route('/get-status', methods=['GET'])
def get_status():
    return jsonify({"status": "idle", "last_task": "None"})

if __name__ == '__main__':
    app.run(debug=True)
"@ > $pythonFile

# Requirements fájl létrehozása
$requirementsFile = "$aiControllerPath\requirements.txt"
@"
Flask
pyautogui
"@ > $requirementsFile

# Node.js mappák érintetlenül hagyása
# Ha további fájlokat kell generálni a meglévő mappákban, itt lehet bővíteni

# Stílusfájl létrehozása a "style" mappában
$stylePath = "$projectRoot\style"
New-Item -ItemType Directory -Force -Path $stylePath
$styleFile = "$stylePath\main.css"
@"
/* Példa CSS fájl */
body {
    font-family: Arial, sans-serif;
}
"@ > $styleFile

# Renderer fájl létrehozása a "renderer" mappában
$rendererPath = "$projectRoot\renderer"
New-Item -ItemType Directory -Force -Path $rendererPath
$rendererFile = "$rendererPath\main.js"
@"
// Példa JavaScript fájl
console.log('Renderer initialized');
"@ > $rendererFile

# Preload fájl létrehozása a "preload" mappában
$preloadPath = "$projectRoot\preload"
New-Item -ItemType Directory -Force -Path $preloadPath
$preloadFile = "$preloadPath\preload.js"
@"
// Példa preload fájl
console.log('Preload script loaded');
"@ > $preloadFile

# Sikeres üzenet
Write-Host "Minden szükséges mappa és fájl sikeresen létrehozva a $projectRoot mappában." -ForegroundColor Green
