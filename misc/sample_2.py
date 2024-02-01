import json
import requests

# Replace with your Azure Translator Text API key and endpoint
azure_api_key = "7f2623d635f944d7969e462d54f8c5cc"
serviceRegion = "centralindia"
endpoint = f'https://api.cognitive.microsofttranslator.com'

# Input JSON file with numeric keys and sentences as values
input_json = {
    1: "Tata Nano: The Tata Nano, launched in 2009, was known as the world's cheapest car and aimed to provide affordable transportation to the masses.",
    2: "Mahindra e2o: Mahindra's electric car, the e2o, focused on providing an eco-friendly urban mobility solution.",
    3: "Maruti Suzuki Swift: The Maruti Suzuki Swift is a popular hatchback known for its design and performance.",
    4: "Mumbai-Pune Expressway: India's first six-lane, high-speed expressway connecting Mumbai and Pune, significantly improving connectivity and reducing travel time."
}

# Define the target languages
languages = ["en-IN", "hi-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "mr-IN", "gu-IN", "bn-IN", "ur-IN", "ru-RU", "es-ES", "zh-TW", "fr-BE", "ar-AE", "pt-PT", "de-AT", "ja-JP", "ko-KR", "it-IT", "tr-TR", "ms-MY"]

# Initialize a dictionary to store translation results
translations = {}

# Loop through each numeric key and sentence in the input JSON and translate to multiple languages
for key, text in input_json.items():
    translation = {}

    for lang in languages:
        # Prepare the request URL
        url = f"{endpoint}/translate?api-version=3.0&to={lang}"

        # Prepare the request headers
        headers = {
            "Ocp-Apim-Subscription-Key": azure_api_key,
            "Ocp-Apim-Subscription-Region": serviceRegion,
            "Content-Type": "application/json",
        }

        # Prepare the request body
        body = [{"text": text}]

        # Send the translation request
        response = requests.post(url, headers=headers, json=body)
        translated_text = response.json()[0]["translations"][0]["text"]
        translation[lang] = translated_text

    # Store the translation for the current sentence
    translations[key] = translation

# Convert the translations to JSON format
output_json = json.dumps(translations, indent=2, ensure_ascii=False)
with open("translations.json", "w", encoding="utf-8") as json_file:
    json_file.write(output_json)

print("Translations saved to 'translations.json'")
