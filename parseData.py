import os
import json

# Directory containing JSON files
d = 'src/data'

# Function to count objects in a JSON file
def count_objects(fp):
    try:
        with open(fp, 'r') as jf:
            data = json.load(jf)
            return len(data)
    except Exception as e:
        return 0

# List all JSON files in the directory
files = sorted([f for f in os.listdir(d) if f.endswith('.json')])

# Create a data-report.txt file for writing
with open('data-report.txt', 'w') as report_file:
    # Iterate through JSON files, count objects, and write to the report file
    for i, f in enumerate(files, start=1):
        p = os.path.join(d, f)
        o = count_objects(p)
        report_line = f"{i}. {f}({o})\n"
        print(report_line)  # Print to console (optional)
        report_file.write(report_line)
