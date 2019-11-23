import matplotlib
matplotlib.use('TkAgg')
import numpy as np
from skimage.color import rgb2gray
from skimage.transform import rescale
import matplotlib.pyplot as plt
import PIL
from PIL import Image, ImageDraw
import cv2


def bbox(image):
    im_copy = image.copy()
    image = (255*rescale(image,0.25)).astype(np.uint8)
    proto = np.zeros_like(image)
    image = image[:-35,...]
    img = np.zeros_like(image)
    blur = cv2.medianBlur(image, 11)
    # blur = image
    gray = cv2.cvtColor(blur, cv2.COLOR_BGR2GRAY)
    thresh = cv2.adaptiveThreshold(gray,255,cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY,11,3)

    canny = cv2.Canny(thresh, 120, 255, 1)
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (5,5))
    opening = cv2.morphologyEx(canny, cv2.MORPH_CLOSE, kernel)
    dilate = cv2.dilate(opening, kernel, iterations=2)

    cnts = cv2.findContours(dilate, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
    cnts = cnts[0] if len(cnts) == 2 else cnts[1]

    min_area = 3000
    for c in cnts:
        area = cv2.contourArea(c)
        if area > min_area:
            cv2.drawContours(img, [c], -1, (255, 0,0,0), 2)
    
    ## Start Bounding Box Stuff
    proto[:-35,...]=img
    box = proto
    box = rescale(box,4)
    image = im_copy
#     image = (255 * image).astype(np.uint8)

    mask=box.copy()
    m = mask[...,0]
    alpha = np.zeros_like(m)
    alpha[m>0]=1
    mask = np.concatenate((mask,alpha[...,None]),axis=-1)
    
    
    box = rgb2gray(box)
    x,y = np.nonzero(box)

    xm = x.min()
    xma = x.max()

    x, y = np.nonzero(box[xm+15:xma-15,:])
    ym = y.min()
    yma = y.max()
    xlen = xma-xm
    ylen = yma-ym

    mask = (255*(mask)).astype(np.uint8)
    mask = Image.fromarray(mask,mode='RGBA')
    img = Image.fromarray(image)

    if xlen < 150 or ylen<150:
        return np.asarray(img), (0,0) 
    
    draw = ImageDraw.Draw(img) 
    draw.rectangle([ym,xm,yma,xma], outline=(0,255,0,1), width=20)
    img = img.convert('RGBA')
#     new_img = Image.blend(img, mask, 0.5)
    img.paste(mask,mask)
    
    return np.asarray(img.convert('RGB')), (xlen,ylen)
