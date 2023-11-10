import os
import json

directory = '/Users/hengb01/Sites/flash-cards/src/data'

for filename in os.listdir(directory):
    if filename.endswith('.json'):
        filepath = os.path.join(directory, filename)

        with open(filepath, 'r') as file:
            data = json.load(file)

        # Sort the data based on the 'name' field
        data.sort(key=lambda item: item.get('name', '').lower())

        with open(filepath, 'w') as file:
            json.dump(data, file, indent=4)

        # Print each item as it's completed
        for item in data:
            print(f'✅ {item["name"]}')

print("Completed sorting JSON data based on 'name' field.")
