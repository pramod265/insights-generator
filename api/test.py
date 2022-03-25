import pandas as pd
from pandas_profiling import ProfileReport
#pip install pandas-profiling==2.12.0

data = pd.read_csv('diamonds.csv')

profile = ProfileReport(data)

profile.to_file("eda_on_diamonds_dataset.html")

