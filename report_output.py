import math
import pandas as pd

def report_crack(length,breadth,time,material,max_load,min_load):
    crack_length = math.sqrt(length**2+breadth**2)
    file = pd.read_csv('./material.csv')
    C_constant = file[(file['material']== material)&(file['time']==time)]['C']
    m =  file[(file['material']== material)&(file['time']==time)]['m']
    N = file[(file['material']== material)&(file['time']==time)]['cycles']
    cycles = crack_length/(C*((max_load - min_load)*(10**5))**m)
    if(cycles >  N):
        num_cycles = 'Usage ' 
    else:
        num_cycles = 'manufacturing defect'
    output = 'cracked'
    return crack_length,output,num_cycles 

def report_no_crack(length,breadth,time,material,max_load,min_load):
    if(length == None and breadth == None):
        output = 'Not cracked'
    file = pd.read_csv('./material.csv')
    C_constant = file[(file['material']== material)&(file['time']==time)]['C']
    m =  file[(file['material']== material)&(file['time']==time)]['m']
    N = file[(file['material']== material)&(file['time']==time)]['cycles']
    cycles = crack_length/(C*((max_load - min_load)*(10**5))**m)
    if(cycles >  N):
        num_cycles = 'perform maintanence' 
    else:
        num_cycles = 'The sample is okay'

    return crack_length,output,num_cycles 


