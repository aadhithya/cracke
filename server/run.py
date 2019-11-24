from flask import Flask, render_template, send_from_directory
from flask_socketio import SocketIO, join_room, emit
#from codenames import game
# from .templates.detct import bbox
import base64
import numpy as np
import matplotlib
import os.path

matplotlib.use('TkAgg')
from skimage.color import rgb2gray
from skimage.transform import rescale
# import matplotlib.pyplot as plt
# import PIL
from PIL import Image, ImageDraw
import cv2
import math
import pandas as pd
# initialize Flask
app = Flask(__name__)
#cors = CORS(app,resources={r"/api/*":{"origins":"*"}})
socketio = SocketIO(app, cors_allowed_origins="*")
ROOMS = {} # dict to track active rooms
write_flag = False
@app.route('/')
def index():
    """Serve the index HTML"""
    return render_template('index.html')

@socketio.on('create')
def on_create(data):
    """Create a game lobby"""
    print(data)
    gm = dict( 
         size=data['size'],
         teams=data['teams'],
         dictionary=data['dictionary'])
    room = 'hello jj'
    ROOMS[room] = gm
    join_room(room)
    emit('join_room', {'room': room})

@app.route('/asset/<path:path>')
def send_js(path):
    return send_from_directory('asset', path)

@socketio.on('report_feed')
def on_create(data):
    """Create a game lobby"""
    global write_flag
    write_flag = True
    for i in range(10000):
        pass

    print(data)

    generate_report('', 'out.jpg', 3,3,2,'cast iron', 1000, 100)
    # with open('report.html', 'rb') as f:
    #     report_data = f.read()
    write_flag = False
    emit('report_out_feed', {'feed': ''})

def report_crack(length, breadth, time, material, max_load, min_load):
    file = pd.read_csv('./material.csv')
    C = file[(file['material'] == material) & (file['time'] == time)]['C'].values
    m = file[(file['material'] == material) & (file['time'] == time)]['m'].values
    N = file[(file['material'] == material) & (file['time'] == time)]['cycles'].values
    # print(N)

    if (length == 0 and breadth == 0):
        output = 'Not cracked'
        crack_length = 0
        num_cycles = 'No problem with the sample'
    else:
        output = 'cracked'
        crack_length = math.sqrt(length ** 2 + breadth ** 2)
        cycles = (crack_length * (10 ** -3)) / (C * ((max_load - min_load) ** m))
        # print(cycles)
        if (cycles[0] > N[0]):
            num_cycles = 'Cracks due to excessive fatigue (Usage based) '
        else:
            num_cycles = 'manufacturing defect'
        return crack_length, output, num_cycles, cycles[0]
    # print(crack_length,output,num_cycles)
    return crack_length, output, num_cycles, -1

def generate_report(path, filename, length, breadth, time, material, max_load, min_load):
    with open('asset/report.html', 'w') as file:
        file.write('<html> \n ')
        file.write('<head><title>Report: {}  </title>'.format(filename[:-4]))
        file.write('<link rel="stylesheet" href="style.css"> </head>\n')
        file.write('<body> <center> <div class="card main-card">\n')
        file.write('<h1>Report: {}</h1><hr>'.format(filename[:-4]))
        file.write('<p><img class="inner-card" src="{}" width="600"> </p></br>'.format(path + filename))
        file.write('<div class="inner-card text-card"> <h2>Input</h2><hr>')
        file.write(f'<b>Material of the sample</b><div>{material}</br></div>')
        file.write(f'<b>Component usage time</b><div>{time} years</br></div>')
        file.write(f'<b>Maximum load capacity of the component</b><div>{max_load} MPa</br></div>')
        file.write(f'<b>Maximum load capacity of the component</b><div>{min_load} MPa</br></div></div>')

        crack_length, output, analysis, cycles = report_crack(length, breadth, time, material, max_load, min_load)
        file.write('<div class="inner-card text-card"><h2> Output</h2><hr>')
        color = 'poda' if 'not' in output.lower() else 'danger'
        file.write(f'<b> Crack status</b><div class="{color}">{output} </br></div> ')
        file.write(f'<b> Analysis of the sample </b><div>{analysis}</br> </div> ')
        file.write(f'<b> Approximate crack length </b><div>{crack_length:0.3f} Micrometer </br></div>')
        file.write(
            f'<b> Cycles since Damage (CrackDating™) </b><div>{int(cycles)} </br></div></div></div></center> </body></html>')


@socketio.on('camera_feed')
def on_create(data):
    """Create a game lobby"""
    image_data = data['feed']
    # r = base64.b64decode(image_data)

    from PIL import Image
    import cv2
    import io
    # Take in base64 string and return cv image
    def stringToRGB(base64_string):
        base64_string = base64_string.split(',')[1]
        nparr = np.fromstring(base64.b64decode(base64_string), np.uint8)
        img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        # imgdata = base64.b64decode(str(base64_string))
        # image = Image.open(imgdata)
        # return cv2.cvtColor(np.array(image), cv2.COLOR_BGR2RGB)
        return img
    r = stringToRGB(image_data)
    # with open('x.jpg', 'wb') as f:
    #     f.write(r)
    # print(type(r))
    # q = np.frombuffer(r, dtype="int32")
    # r = cv2.imread('/home/abhijit/Jyotirmay/server/201506009_LIMI_007979.jpg')
    o, i = bbox(r)
    out = imgtobase64(o)
    # out = base64.b64encode(o)

    emit('out_feed', {'feed': out})

def analyse_image(image64data):
    return image64data

def imgtobase64(img_arr):
    from io import BytesIO
    orig_pil_img = Image.fromarray(img_arr)
    orig_pil_img = orig_pil_img.convert('RGB')
    orig_buff = BytesIO()
    orig_pil_img.save(orig_buff, format='PNG')
    orig_base64_string = base64.b64encode(orig_buff.getvalue()).decode("utf-8")
    return orig_base64_string

xlen, ylen = 0, 0
def bbox(image):
    global write_flag
    print(image.shape)
    im_copy = image.copy()
    image = (255 * rescale(image, 1)).astype(np.uint8)
    proto = np.zeros_like(image)
    image = image[:-5, ...]
    img = np.zeros_like(image)
    blur = cv2.medianBlur(image, 7)
    # blur = image
    gray = cv2.cvtColor(blur, cv2.COLOR_BGR2GRAY)
    thresh = cv2.adaptiveThreshold(gray, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 11, 3)

    canny = cv2.Canny(thresh, 120, 255, 1)
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (5, 5))
    opening = cv2.morphologyEx(canny, cv2.MORPH_CLOSE, kernel)
    dilate = cv2.dilate(opening, kernel, iterations=2)

    cnts = cv2.findContours(dilate, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
    cnts = cnts[0] if len(cnts) == 2 else cnts[1]

    min_area = 3000
    for c in cnts:
        area = cv2.contourArea(c)
        if area > min_area:
            cv2.drawContours(img, [c], -1, (255, 0, 0, 0), 2)

    ## Start Bounding Box Stuff
    proto[:-5, ...] = img
    box = proto
    box = rescale(box, 1)
    image = im_copy
    #     image = (255 * image).astype(np.uint8)

    mask = box.copy()
    m = mask[..., 0]
    alpha = np.zeros_like(m)
    alpha[m > 0] = 1
    mask = np.concatenate((mask, alpha[..., None]), axis=-1)

    box = rgb2gray(box)
    x, y = np.nonzero(box)
    # import pdb; pdb.set_trace()
    if len(x) <1 or len(y)<1:
        print('PICKLE RICKKKKKK!')
        return im_copy, (0,0)
    xm = x.min()
    xma = x.max()

    x, y = np.nonzero(box[xm + 7:xma - 7, :])
    ym = y.min()
    yma = y.max()
    xlen = xma - xm
    ylen = yma - ym

    mask = (255 * (mask)).astype(np.uint8)
    mask = Image.fromarray(mask, mode='RGBA')
    img = Image.fromarray(image)

    if xlen < 150 or ylen < 150:
        return np.asarray(img), (0, 0)
    else:
        draw = ImageDraw.Draw(img)
        draw.rectangle([ym, xm, yma, xma], outline=(0, 255, 0, 1), width=20)
        img = img.convert('RGBA')
        #     new_img = Image.blend(img, mask, 0.5)
        img.paste(mask, mask)
        img.convert('RGB').save('/home/abhijit/Jyotirmay/server/asset/out.jpg')

    return np.asarray(img.convert('RGB')), (xlen, ylen)


if __name__ == '__main__':
    socketio.run(app, debug=True, host='0.0.0.0', port=8765)
