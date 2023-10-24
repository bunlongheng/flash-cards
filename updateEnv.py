import os

data_dir = "src/data"
json_files = os.listdir(data_dir)
names = [os.path.splitext(file)[0] for file in json_files]
names_str = ",".join(names)
env_file = ".env"

# Open the .env file in write mode to overwrite it
with open(env_file, "w") as file:
    file.write(f"REACT_APP_CATEGORIES={names_str}\n")
    
data_dir = "public/images/transportations"
json_files = os.listdir(data_dir)
names = [os.path.splitext(file)[0] for file in json_files]
names_str = ",".join(names)

# Append the REACT_APP_CATEGORIES field to .env
with open(env_file, "a") as file:
    file.write(f"REACT_APP_TRANSPORTATION_TYPES={names_str}\n")

print("\n\n\n\n")
print("\033[42;1;97mDone\033[0m: .env updated!")
print("\033[46;1;97mAdd icon for new type(s)\033[0m: /Users/hengb01/Sites/flash-cards/public/images/types")
print("\n\n\n\n")
