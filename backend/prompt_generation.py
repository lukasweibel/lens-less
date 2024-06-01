import os

import requests

geocode_api_key = os.getenv("GEOCODE_API_KEY")

brightness_map = {
    0: "The picture captured an environment enveloped in pitch black darkness, as if it were a moonless night.",
    1: "The picture captured an environment that was dim, resembling the faint glimmer of a starry night.",
    2: "The picture captured an environment bathed in a dusky glow, like the moments just before dawn.",
    3: "The picture captured an environment that was moderately bright, similar to an overcast day.",
    4: "The picture captured an environment that was well-lit, reminiscent of a sunny afternoon.",
    5: "The picture captured an environment that was dazzlingly bright, like a cloudless midday.",
    6: "The picture captured an environment bathed in a blindingly bright light, as brilliant as a sunlit snowfield."
}

population_map = {
    0: "an empty scene with no people",
    1: "a scene with very few people",
    2: "a scene with a small group of people",
    3: "a scene with a moderate number of people",
    4: "a scene with several people",
    5: "a scene with many people",
    6: "a very crowded scene with a lot of people"
}


def create_prompt_from_data(sensor_data):
    latitude = sensor_data.get("latitude")
    longitude = sensor_data.get("longitude")
    location = get_location_name(latitude, longitude)
    temperature = sensor_data.get("temperature")
    brightness = brightness_map[sensor_data.get("brightness")]
    population = population_map[sensor_data.get("population")]
    colorscheme = sensor_data.get("colorscheme")
    style = sensor_data.get("style")

    prompt = (
        f"Create a {style} image with a {colorscheme} color scheme. "
        f"The scene should accurately depict the environment at {location}. "
        f"Current conditions are a temperature of {temperature}°C."
        f"{brightness}"
        f"Its {population}. "
        f"The image should look like a real photo taken at this location, capturing the true essence of the environment. "
        f"Incorporate realistic geographic features, vegetation, architecture, and any other elements characteristic of this place. "
        f"Ensure the atmosphere and lighting are true to the specified conditions, "
        f"so the image reflects the genuine feel and appearance of the location at this time."
    )
    return prompt


def create_prompt_from_feedback(feedback, original_prompt):
    prompt = (
        f"Below you'll find a prompt with which you already have drawn a picture:"
        f"\n"
        f"\n"
        f"{original_prompt}"
        f"\n"
        f"\n"
        f"The user has now the following feedback to your old picture. Draw a new picture from the old prompt but also consider the feedback:"
        f"\n"
        f"\n"
        f"{feedback}"
    )
    return prompt


def get_location_name(latitude, longitude):
    if not latitude or not longitude or int(latitude) == 0 or int(longitude) == 0:
        latitude = 47.49958
        longitude = 8.72811
    url = f'https://api.opencagedata.com/geocode/v1/json?q={latitude}+{longitude}&key={geocode_api_key}'

    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        if data['results']:
            return data['results'][0]['formatted']
    return f"Longitude: {longitude}, Latitude: {latitude}"
