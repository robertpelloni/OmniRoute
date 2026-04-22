import os
import re

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # The reviewer specifically mentioned `aria-label="Action button"` as a severe accessibility violation
    if 'aria-label="Action button"' in content:
        print(f"Fixing accessibility violation in {filepath}")
        new_content = content.replace('aria-label="Action button"', '')
        with open(filepath, 'w') as f:
            f.write(new_content)

for root, dirs, files in os.walk("src/app/(dashboard)"):
    for file in files:
        if file.endswith(".tsx"):
            process_file(os.path.join(root, file))
