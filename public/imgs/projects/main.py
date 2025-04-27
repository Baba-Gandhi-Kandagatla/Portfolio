import os
from PIL import Image
from datetime import datetime

# Path to your folder containing the images
folder_path = 'ou-grade-retrieval'

# Get a sorted list of files in the folder based on modification time
image_files = sorted(
    [f for f in os.listdir(folder_path) if f.lower().endswith(('.jpg', '.jpeg', '.png'))],
    key=lambda f: os.path.getmtime(os.path.join(folder_path, f))
)

# Iterate through each file, convert to PNG, and rename based on date order
for idx, image_file in enumerate(image_files):
    # Open the image
    img_path = os.path.join(folder_path, image_file)
    img = Image.open(img_path)

    # Generate the new filename based on the index
    new_name = f"{idx + 1}.png"  # Starts naming from 1

    # Save the image as PNG with the new name
    new_path = os.path.join(folder_path, new_name)
    img.save(new_path, 'PNG')

    # Delete the original file after conversion
    os.remove(img_path)

    print(f"Converted and deleted {image_file}, renamed to {new_name}")
