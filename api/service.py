import os
from flask import Flask, Response, request
from flask import Flask, send_from_directory
from backend.blob_accessor import upload_picture, load_picture

app = Flask(__name__, static_folder='./../frontend/public', static_url_path='')

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/data', methods=['POST'])
def postData():
    data = request.json
    print(data)
    return {"received_data": data}, 200

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

if __name__ == '__main__':
    app.run(debug=True, port=80)
