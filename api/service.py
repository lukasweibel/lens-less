import json
import os

from flask import Flask, send_from_directory
from flask import Response, request

from backend.blob_accessor import upload_picture, load_picture
from backend.image_generation import generate_picture
from backend.mongodb_accessor import add_entry_to_db, get_all_entries
from backend.prompt_generation import create_prompt

app = Flask(__name__, static_folder='./../frontend/public', static_url_path='')

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/data', methods=['POST'])
def postData():
    data = request.json
    print(data)
    prompt = create_prompt(data)
    picture = generate_picture(prompt)
    pictureId = upload_picture(picture)
    add_entry_to_db(prompt, pictureId, data)
    return {"received_data": data, "pictureId": pictureId}, 200

@app.route('/picture', methods=['POST'])
def uploadPicture():
    local_file_name = "pictures/car3.png"
    upload_file_path = os.path.join(".", local_file_name)
    with open(upload_file_path, "rb") as data:
            pictureId = upload_picture(data)
    return {"received_request": "OK", "pictureId": pictureId}, 200

@app.route('/picture/<pictureId>', methods=['GET'])
def downloadPicture(pictureId):
    return Response(load_picture(pictureId+'.png') , mimetype='image/png')

@app.route('/history', methods=['GET'])
def getHistory():
    data = json.dumps(get_all_entries())  # Serialize data to a JSON formatted string
    return Response(data.encode('utf-8'), mimetype='application/json')


if __name__ == '__main__':
    app.run(debug=True, port=80)
