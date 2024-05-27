import requests

brightness_map = {
    0: "The picture captured an environment enveloped in pitch black darkness, with shadows swallowing every corner.",
    1: "The picture captured an environment that was dim, with only a faint glimmer of light breaking through the murky shadows.",
    2: "The picture captured an environment bathed in a dusky glow, barely illuminated like the moments before dawn.",
    3: "The picture captured an environment that was moderately bright, with a soft light that created a gentle ambiance.",
    4: "The picture captured an environment that was well-lit, with a luminous quality that made everything appear vibrant and clear.",
    5: "The picture captured an environment that was dazzlingly bright, with intense light that left no shadows behind.",
    6: "The picture captured an environment bathed in a blindingly bright light, so brilliant it was almost glaring."
}


def create_prompt(sensor_data):
    latitude = sensor_data.get("latitude")
    longitude = sensor_data.get("longitude")
    location = get_location_name(latitude, longitude)
    temperature = sensor_data.get("temperature")
    brightness = brightness_map[sensor_data.get("brightness")]
    population = sensor_data.get("population")
    colorscheme = sensor_data.get("colorscheme")
    style = sensor_data.get("style")

    prompt = (
        f"Create a {style} image with a {colorscheme} color scheme. "
        f"The scene should accurately depict the environment at {location}. "
        f"Current conditions are a temperature of {temperature}°C."
        f"{brightness}"
        f"and a population density of {population}. "
        f"The image should look like a real photo taken at this location, capturing the true essence of the environment. "
        f"Incorporate realistic geographic features, vegetation, architecture, and any other elements characteristic of this place. "
        f"Ensure the atmosphere and lighting are true to the specified conditions, "
        f"so the image reflects the genuine feel and appearance of the location at this time."
    )
    return prompt


def get_location_name(latitude, longitude):
    api_key = ''
    url = f'https://api.opencagedata.com/geocode/v1/json?q={latitude}+{longitude}&key={api_key}'

    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        if data['results']:
            return data['results'][0]['formatted']
    return f"Longitude: {longitude}, Latitude: {latitude}"
