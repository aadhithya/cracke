import math
import pandas as pd

def report_crack(length,breadth,time,material,max_load,min_load):
    file = pd.read_csv('./material.csv')
    C = file[(file['material']== material)&(file['time']==time)]['C'].values
    m =  file[(file['material']== material)&(file['time']==time)]['m'].values
    N = file[(file['material']== material)&(file['time']==time)]['cycles'].values
    # print(N)
    
    if(length == None and breadth== None):
        output = 'Not cracked'
        crack_length = 0
        num_cycles = 'No problem with the sample'
    else:
        output = 'cracked'
        crack_length = math.sqrt(length**2+breadth**2)
        cycles = (crack_length*(10**-3))/(C*((max_load - min_load)**m))
        # print(cycles)
        if(cycles[0] >  N[0]):
            num_cycles = 'Cracks due to excessive fatigue (Usage based) ' 
        else:
            num_cycles = 'manufacturing defect'
    # print(crack_length,output,num_cycles)
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


report_crack(None,None,2,'cast iron',1000,200)