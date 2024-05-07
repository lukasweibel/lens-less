import os
from dotenv import load_dotenv
import requests
from io import BytesIO

load_dotenv()

openai_api_key = os.getenv("OPENAI_API_KEY")

import requests

def generate_picture(prompt):
    headers = {
        'Authorization': f'Bearer {openai_api_key}',
        'Content-Type': 'application/json',
    }

    data = {
        "prompt": prompt,
        "n": 1,  # Number of images to generate
        "size": "1024x1024"  # Image size
    }

    response = requests.post('https://api.openai.com/v1/images/generations', headers=headers, json=data)

    if response.status_code == 200:
        print("Image generated successfully!")
        image_url = response.json()['data'][0]['url']

        # Download the image
        image_response = requests.get(image_url)
        if image_response.status_code == 200:
            print("Image downloaded successfully.")
            return image_response.content  # Return the raw bytes of the image
        else:
            print("Failed to download the image")
            return None
    else:
        print("Failed to generate image")
        print(response.text)
        return None

        
#generate_picture("Give me a picture of a pink Elephant")