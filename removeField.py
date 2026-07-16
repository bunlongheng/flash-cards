import os
import json

directory = 'src/data'

for filename in os.listdir(directory):
    if filename.endswith('.json'):
        filepath = os.path.join(directory, filename)

        with open(filepath, 'r') as file:
            data = json.load(file)

        for item in data:
            item.pop('hint', None)

        with open(filepath, 'w') as file:
            json.dump(data, file, indent=4)

print("Completed removing 'description' attributes from JSON files.")
