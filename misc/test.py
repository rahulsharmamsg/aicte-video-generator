import requests
import json

# Replace with your Azure Translator Text API key and endpoint
azure_api_key = "7f2623d635f944d7969e462d54f8c5cc"
azure_service_region = "centralindia"
endpoint = f"https://api.cognitive.microsofttranslator.com/translate?api-version=3.0"

# Input array of sentences
sentences = [
    "Hello, how are you?",
    "Translate this word.",
    "Microsoft Cognitive Services is amazing!",
]
target_languages = [
    "en-IN", "hi-IN", "te-IN", "ta-IN", "kn-IN", "ml-IN", "mr-IN", "gu-IN", "bn-IN", "ur-IN",
    "ru-RU", "es-ES", "zh-TW", "fr-BE", "ar-AE", "pt-PT", "de-AT", "ja-JP", "ko-KR", "it-IT", "tr-TR", "ms-MY"
]

# Initialize a list to store translation results
translations = []

# Prepare the request headers
headers = {
    "Ocp-Apim-Subscription-Key": azure_api_key,
    "Ocp-Apim-Subscription-Region": azure_service_region,
    "Content-Type": "application/json",
}

# Prepare the request body as a batch
request_body = [{"text": sentence} for sentence in sentences]

# Send the translation request for each target language
for target_language in target_languages:
    try:
        response = requests.post(f"{endpoint}&to={target_language}", headers=headers, json=request_body)
        response.raise_for_status()  # Check for any request errors
        translation_data = response.json()

        # Create a dictionary for the current target language
        translation_dict = {target_language: {}}

        # Extract and store translations for each sentence
        for i, item in enumerate(translation_data):
            translation = item["translations"][0]["text"]
            translation_dict[target_language][sentences[i]] = translation

        translations.append(translation_dict)

    except requests.exceptions.HTTPError as http_err:
        print(f"HTTP error occurred for language {target_language}: {http_err}")
    except Exception as err:
        print(f"An error occurred for language {target_language}: {err}")

# Save translations to a JSON file
with open("translations.json", "w", encoding="utf-8") as json_file:
    json.dump(translations, json_file, ensure_ascii=False, indent=2)

print("Translations saved to 'translations.json'")

