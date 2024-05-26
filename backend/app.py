from flask import Flask, request, jsonify, send_file
from io import BytesIO
from image_generation import generate_picture
from blob_accessor import upload_picture, load_picture

app = Flask(__name__)

@app.route('/data', methods=['POST'])
def receive_data():
    data = request.get_json()
    prompt = create_prompt(data)
    image_content = generate_picture(prompt)
    if image_content:
        picture_id = upload_picture(image_content)
        if picture_id:
            return jsonify({"status": "success", "picture_id": picture_id})
        else:
            return jsonify({"status": "failed", "message": "Upload failed"}), 500
    else:
        return jsonify({"status": "failed", "message": "Image generation failed"}), 500

@app.route('/picture', methods=['POST'])
def upload_picture_endpoint():
    file = request.files['file']
    picture_id = upload_picture(file.read())
    if picture_id:
        return jsonify({"status": "success", "picture_id": picture_id})
    else:
        return jsonify({"status": "failed", "message": "Upload failed"}), 500

@app.route('/picture/<int:picture_id>', methods=['GET'])
def get_picture(picture_id):
    try:
        picture_name = f"{picture_id}.png"
        image_content = load_picture(picture_name)
        return send_file(BytesIO(image_content), mimetype='image/png')
    except Exception as e:
        return jsonify({"status": "failed", "message": str(e)}), 500

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
    app.run(debug=True)