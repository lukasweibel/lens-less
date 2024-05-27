import os
from flask import Flask, Response, request
from flask import Flask, send_from_directory
from backend.blob_accessor import upload_picture, load_picture
from backend.image_generation import generate_picture
from backend.mongodb_accessor import add_entry_to_db

app = Flask(__name__, static_folder='./../frontend/public', static_url_path='')

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/data', methods=['POST'])
def postData():
    data = request.json
    print(data)
    prompt = create_prompt(data)
    add_entry_to_db(prompt)
    print(prompt)
    picture = generate_picture(prompt)
    pictureId = upload_picture(picture)
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

def create_prompt(sensor_data):
    latitude = sensor_data.get("latitude")
    longitude = sensor_data.get("longitude")
    temperature = sensor_data.get("temperature")
    brightness = sensor_data.get("brightness")
    population = sensor_data.get("population")
    colorscheme = sensor_data.get("colorscheme")
    style = sensor_data.get("style")
    
    prompt = (
        f"Create a {style} image with a {colorscheme} color scheme. "
        f"The scene should represent a location at latitude {latitude} and longitude {longitude}. "
        f"The current temperature is {temperature}°C, with a brightness level of {brightness} and a population density of {population}. "
        f"The image should look as if it was taken by a camera at this location, capturing the realistic essence of the environment and conditions."
    )
    return prompt

if __name__ == '__main__':
    app.run(debug=True, port=80)
