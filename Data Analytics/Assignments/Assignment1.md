## Create a simple plot using numpy, pandas dataframe, matplotlib
- Suggestion: Take your monthly expenditure on canteen.  Example, daily you may spend like 80 rupees or 50 rupees etc.
- Use the following code and see the output

![image](https://github.com/user-attachments/assets/c2fc8961-0fa9-4aa7-a91b-1a57413b4857)

import re

# Sample text
text = "The price of the book is $25. The pen costs $3."

# Regular expression pattern to find prices
pattern = r"\$\d+"

# Find all matches
matches = re.findall(pattern, text)

# Print matches
print("Prices found:", matches)

# Replace prices with '[REDACTED]'
redacted_text = re.sub(pattern, "[REDACTED]", text)

print("Redacted text:", redacted_text)
