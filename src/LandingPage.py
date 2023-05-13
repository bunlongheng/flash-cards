import os
data_dir = "src/data"
json_files = os.listdir(data_dir)
names = [os.path.splitext(file)[0] for file in json_files]
names_str = ",".join(names)
env_file = ".env"
with open(env_file, "w") as file:
    file.write(f"REACT_APP_TYPES={names_str}\n")
