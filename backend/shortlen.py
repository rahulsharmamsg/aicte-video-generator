from transformers import pipeline

# Load the paraphrase model
paraphrase_pipeline = pipeline("text2text-generation", model="tuner007/pegasus_paraphrase")

# Original text to paraphrase
original_text = "my name is rahul sharma i am from mathura"

# Generate paraphrased text
paraphrased_text = paraphrase_pipeline(original_text, max_length=50, num_return_sequences=1)

# Print paraphrased text
print("Original Text:", original_text) 
print("Paraphrased Text:", paraphrased_text[0]["generated_text"])