import os
import urllib.request
import ssl

# Ignore invalid certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

base_url = "https://viaanafoundation.org/dist/img/"
images = [
    "Vianna/png/logo_.png",
    "first_slide.jpg",
    "second_slide.jpg",
    "third_slide.png",
    "happy_picture.jpg",
    "volunteer_india.jpg",
    "v_training.png",
    "women_empower.png",
    "environment.png",
    "together.jpg",
    "causes-1.jpg",
    "causes-2.jpg",
    "causes-3.jpg",
    "causes-4.jpg",
    "donate.jpg",
    "event-1.jpg",
    "event-2.jpg",
    "team-1.jpg",
    "team-2.jpg",
    "team-3.jpg",
    "team-4.jpg",
    "testimonial-1.jpg",
    "testimonial-2.jpg",
    "testimonial-3.jpg",
    "testimonial-4.jpg",
    "blog-1.jpg",
    "blog-2.jpg",
    "blog-3.jpg"
]

output_dir = "img"
# Ensure output directory exists (already done via shell but good to be safe)
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

for img_path in images:
    url = base_url + img_path
    filename = img_path.split("/")[-1] # Handle subdirectories
    save_path = os.path.join(output_dir, filename)
    
    print(f"Downloading {url} to {save_path}...")
    try:
        with urllib.request.urlopen(url, context=ctx) as response, open(save_path, 'wb') as out_file:
            data = response.read()
            out_file.write(data)
        print("Success.")
    except Exception as e:
        print(f"Failed: {e}")
