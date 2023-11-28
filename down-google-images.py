from google_images_download import google_images_download
import os
import json

# Define the directory paths
script_directory = os.path.dirname(os.path.abspath(__file__))
output_directory = os.path.join(script_directory, "dinosaur_images")

# Create a folder to store the images if it doesn't exist
if not os.path.exists(output_directory):
    os.makedirs(output_directory)

# Load dinosaur names from the JSON file
json_file_path = "src/data/dinosaurs.json"  # Adjust the path if needed
with open(json_file_path, "r") as json_file:
    dinosaurs = json.load(json_file)

# Initialize the image downloader
response = google_images_download.googleimagesdownload()

# Download one PNG image for each dinosaur
for dinosaur in dinosaurs:
    download_options = {
        "keywords": f"{dinosaur['name']} Size: Large",
        "limit": 1,
        "output_directory": output_directory,
        "format": "png",
    }
    response.download(download_options)

print("Images downloaded successfully to the script directory.")
