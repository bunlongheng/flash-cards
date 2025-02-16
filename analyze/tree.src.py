import os
import subprocess

# Generate the tree structure
result = subprocess.run(["tree", "src/"], capture_output=True, text=True)
tree_output = result.stdout

# Process the tree output
formatted_output = []
cleaned_output = []
for line in tree_output.splitlines():
    modified_line = line.replace("├── ", "").replace("└── ", "").replace("│   ", "").replace("│", "")
    formatted_output.append(modified_line)
    cleaned_output.append(line)

# Write to analyze/tree.src-only.mindmap.txt
output_file_1 = "analyze/tree.src-mindmap.txt"
with open(output_file_1, "w") as f:
    f.write("\n".join(formatted_output))

# Write structured tree format to analyze/tree.src-structured.txt
output_file_2 = "analyze/tree.src-structured.txt"
with open(output_file_2, "w") as f:
    f.write("\n".join(cleaned_output))

# Open the files (Mac-specific)
os.system(f"open {output_file_1}")
os.system(f"open {output_file_2}")
