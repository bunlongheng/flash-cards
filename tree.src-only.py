import os
import subprocess

# Generate the tree structure
result = subprocess.run(["tree", "src/"], capture_output=True, text=True)
tree_output = result.stdout

# Process the tree output
formatted_output = []
for line in tree_output.splitlines():
    modified_line = line.replace("├── ", "").replace("└── ", "").replace("│   ", "").replace("│", "")
    formatted_output.append(modified_line)

# Write to tree.src-only.mindmap.txt
with open("tree.src-only.mindmap.txt", "w") as f:
    f.write("\n".join(formatted_output))

# Open the file (Mac-specific)
os.system("open tree.src-only.mindmap.txt")
