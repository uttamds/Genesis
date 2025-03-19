import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

# Download necessary resources
nltk.download('punkt_tab', quiet=True)
nltk.download('stopwords', quiet=True)

# Example sentence
text = "NLP is amazing! It helps computers understand human language."

# Tokenization
words = word_tokenize(text.lower())  # Convert to lowercase

# Remove stopwords
filtered_words = [word for word in words if word not in stopwords.words('english')]

print("Original Words:", words)
print("Filtered Words (No Stopwords):", filtered_words)


'''
What Did We Do?
✅ Tokenization → Split text into words
✅ Lowercasing → Converted all text to lowercase
✅ Stopword Removal → Removed common words like "is" and "it"
'''
