import os

import requests
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

openai_api_key = os.getenv("OPENAI_API_KEY")

def generate_picture(prompt):
    headers = {
        'Authorization': f'Bearer {openai_api_key}',
        'Content-Type': 'application/json',
    }

    data = {
        "model": "dall-e-3",
        "prompt": prompt,
        "n": 1,  # Number of images to generate
        "size": "1024x1792",
        "quality": "hd",
        "style": "natural"
    }

    # Adjusted to the potentially new endpoint for DALL-E 3
    response = requests.post('https://api.openai.com/v1/images/generations', headers=headers, json=data)

    if response.status_code == 200:
        print("Image generated successfully!")
        # Correctly access the image URL if the response structure has changed
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
