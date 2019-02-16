# -*- coding: utf-8 -*-
"""
Created on Sat Feb 16 15:22:09 2019

@author: user
"""
import os
import sys

from cloudinary.utils import cloudinary_url
from cloudinary.uploader import upload
from cloudinary.api import *
from cloudinary.models import CloudinaryField
import matplotlib.pyplot as plt

# config
os.chdir(os.path.join(os.path.dirname(sys.argv[0]), '.'))
if os.path.exists('settings.py'):
    exec(open('settings.py').read())
cloudinary.config(
  cloud_name = 'tut',  
  api_key = '496433234591175',  
  api_secret = 'N5cV1KhcyPxVb3b9l-7js79dZiE'  
)

DEFAULT_TAG = "python_sample_basic"


def dump_response(response):
    print("Upload response:")
    for key in sorted(response.keys()):
        print("  %s: %s" % (key, response[key]))
        
# upload by url
print("--- Upload by fetching a remote image(traveler)")
response = upload(
        "http://res.cloudinary.com/demo/image/upload/couple.jpg",
        tags=DEFAULT_TAG)
dump_response(response)
url, options = cloudinary_url(
    response['public_id'],
    format=response['format'],
    width=200,
    height=150,
    crop="thumb",
    gravity="faces",
    upload_preset="trash-hunt-items"
)
print("Face detection based 200x150 thumbnail url: " + url)
print("")

print("--- Fetch an uploaded remote image, fitting it into 500x500 and reducing saturation")
response = upload(
   "http://res.cloudinary.com/demo/image/upload/couple.jpg",
   tags=DEFAULT_TAG,
   width=500,
   height=500,
   crop="fit",
   effect="saturation:-70",
   upload_preset="trash-hunt-items"
)
dump_response(response)
url, options = cloudinary_url(
    response['public_id'],
    format=response['format'],
    width=200,
    height=150,
    crop="fill",
    gravity="faces",
    radius=10,
    effect="sepia",
    upload_preset="trash-hunt-items"
)
print("Fill 200x150, round corners, apply the sepia effect, url: " + url)
print("")
    

print("--- Fetch an uploaded remote image, fitting it into 500x500 and transform style")
response = upload(
    "http://res.cloudinary.com/demo/image/upload/couple.jpg",
    tags=DEFAULT_TAG,
    width=500,
    height=500,
    crop="fit",
    upload_preset="trash-hunt-items"
)
dump_response(response)
url, options = cloudinary_url(
response['public_id'],
transformation=[{'height': 200, 'width': 150, 'crop': "fill"},
    {'effect': "style_transfer:preserve_color:40", 'overlay': "lighthouse"}]
#        format=response['format'],
#        width=200,
#        height=150,
#        crop="fill",
#        gravity="faces",
#        radius=10,
#        effect="style_transfer:preserve_color:40", 'overlay': "lighthouse"],
    )
print("Fill 200x150, apply the transferred effect, url: " + url)
print("")

#upload from local with tagging 
#optimize size and quality
print("--- upload and the photo can and optimize it with higher quality and lower file size")
name = []
name.append("can.jpg")
cloudinary.uploader.upload(name[0],
    eager = {'quality': 'jpegmini', 'crop': "fill", 'width': 200, 'height': 150 },
    categorization = "google_tagging,imagga_tagging:en:ch:jp,aws_rek_tagging", 
    auto_tagging = 0.8,
    upload_preset="trash-hunt-items") 
#cloudinary.api.update_resources_access_mode_by_ids("public", name)
cloudinary.api.tags()

#remove background
#print("--- upload and the photo chair and remove the background")
#name.append("chair.jpg")
#cloudinary.uploader.upload(name[1],
#    background_removal = "pixelz",
#    categorization = "google_tagging,imagga_tagging:en:ch:jp,aws_rek_tagging", 
#    auto_tagging = 0.8) 
##cloudinary.api.update_resources_access_mode_by_ids("public", name)
#cloudinary.api.tags()

#show validation date of food
print("--- upload and tag the photo fish with validation date focused")
name.append("fish.jpg")
result = cloudinary.uploader.upload(name[1],
    ocr = "adv_ocr",
    transformation = [
            {'width': 500, 'height': 150, 'gravity': "south_east", 'crop': "crop"},
            {'effect': "pixelate_region", 'gravity': "ocr_text"}
            ],
    categorization = "google_tagging,imagga_tagging:en:ch:jp,aws_rek_tagging", 
    auto_tagging = 0.8,
    upload_preset="trash-hunt-items")
cloudinary.api.tags()

#enhancement for indoor pictures
print("--- upload and tag the photo fish and enhance the instensity")
name.append("fish.jpg")
cloudinary.uploader.upload(name[2],
    public_id = "beach",  
    eager = { 'effect': 'viesus_correct', 'crop': "scale", 'width': 400 },
    categorization = "google_tagging,imagga_tagging:en:ch:jp,aws_rek_tagging", 
    auto_tagging = 0.8,
    upload_preset="trash-hunt-items")
cloudinary.api.tags()


#list the properties of what we uploaded
cloudinary.api.resources(type = "upload")
#visualize the pictures
image=CloudinaryField(name)
#plt.imshow(image)

#delete and restore
cloudinary.api.delete_resources(name[1])
#cloudinary.api.restore(name)

