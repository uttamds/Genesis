import pandas as pd
import matplotlib.pyplot as plt

# Create a simple time series dataset (Fake Sales Data)
data = {'Date': pd.date_range(start='2024-01-01', periods=10, freq='D'),
        'Sales': [10, 12, 15, 13, 18, 20, 25, 23, 27, 30]}

df = pd.DataFrame(data)

# Set Date as Index
df.set_index('Date', inplace=True)

# Plot the time series
plt.plot(df, marker='o', linestyle='-')
plt.title("Simple Time Series: Sales Over Time")
plt.xlabel("Date")
plt.ylabel("Sales")
plt.xticks(rotation=45)
plt.grid()
plt.show()
