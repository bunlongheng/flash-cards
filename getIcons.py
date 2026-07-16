import json
import webbrowser

json_file_path = "src/data/construction-vehicles.json"

with open(json_file_path, "r") as json_file:
    json_data = json.load(json_file)

base_url = "https://www.flaticon.com/search?word="

for item in json_data:
    search_word = item["name"].replace(" ", "%20")
    url = base_url + search_word
    webbrowser.open_new_tab(url)
    print(f"✅ {item['name']}")
