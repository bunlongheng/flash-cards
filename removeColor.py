import os
import json

# Define your directory path
directory = 'src/data'

# Loop through all files in the directory
for filename in os.listdir(directory):
    if filename.endswith('.json') and filename != 'color.json':  # Skip color.json
        filepath = os.path.join(directory, filename)
        
        # Read the current JSON data
        with open(filepath, 'r') as file:
            data = json.load(file)
        
        # Remove 'color' key from each item in the list if it exists
        for item in data:
            item.pop('color', None)  # Removes 'color' without error if not present
        
        # Write the updated data back to the file
        with open(filepath, 'w') as file:
            json.dump(data, file, indent=4)

print("Completed removing 'color' attributes from JSON files.")
