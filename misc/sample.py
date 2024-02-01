import json
import requests

# Replace with your Azure Translator Text API key and endpoint
azure_api_key = "7f2623d635f944d7969e462d54f8c5cc"
serviceRegion = "centralindia"
endpoint = f'https://api.cognitive.microsofttranslator.com'


# Input JSON file with a list of strings
input_json = [
  "Burj Khalifa Foundation, Dubai, UAE",
  "Panama Canal Expansion, Panama",
  "Millau Viaduct, France"
]
# Define the target languages
languages = ["en-IN", "hi-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "mr-IN", "gu-IN", "bn-IN", "ur-IN", "ru-RU", "es-ES", "zh-TW", "fr-BE", "ar-AE", "pt-PT", "de-AT", "ja-JP", "ko-KR", "it-IT", "tr-TR", "ms-MY"]

# Initialize a dictionary to store translation results
translations = {}

# Loop through each string in the input JSON and translate to multiple languages
for text in input_json:
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

    # Store the translation for the current text
    translations[text] = translation

# Convert the translations to JSON format
output_json = json.dumps(translations, indent=2, ensure_ascii=False)
with open("translations.json", "w", encoding="utf-8") as json_file:
    json_file.write(output_json)

print("Translations saved to 'translations.json'")

