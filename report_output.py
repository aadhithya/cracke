import math
import pandas as pd

def report(length,breadth,time,material,load):
    crack_length = math.sqrt(length**2+breadth**2)
    file = pd.read_csv('./material.csv')
    C_constant = file['C']


