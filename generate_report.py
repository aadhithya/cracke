# from mdutils.mdutils import MdUtils
from report_output import *

def generate_report(path,filename,length,breadth,time,material,max_load,min_load):
    # mdFile = MdUtils(file_name='Report_{}'.format(filename),title='Report for {}'.format(filename))
    # mdFile.new_header(level=1,title='{} report'.format(filename))
    # mdFile.write('\n <img src="{}" width="200">'.format(path+filename))
    # mdFile.new_header(level=3,title='Input variables')
    # mdFile.write('\n Material of the sample:{} \n'.format(material))
    # mdFile.write('\n Component usage time:{} years \n'.format(time))
    # mdFile.write('\n Maximum load capacity of the component:{}MPa \n'.format(max_load))
    # mdFile.write('\n Minimum load capacity of component:{} MPa \n'.format(min_load))
    
    # crack_length, output, analysis = report_crack(length,breadth,time,material,max_load,min_load)

    # mdFile.new_header(level=3,title='Output Analysis')
    # mdFile.write('\n Crack status:{} \n'.format(output))
    # mdFile.write('\n Analysis of the sample:{} \n'.format(analysis))
    # mdFile.write('\n Approximate crack length:{} \n'.format(crack_length))

    # mdFile.create_md_file()

    with open('report.html','w') as file:
        file.write('<html> \n ')
        file.write('<head><title>Report: {}  </title>'.format(filename[:-4]))
        file.write('<link rel="stylesheet" href="style.css"> </head>\n')
        file.write('<body> <center> <div class="card main-card">\n')
        file.write('<h1>Report: {}</h1><hr>'.format(filename[:-4]))
        file.write('<p><img class="inner-card" src="{}" width="600"> </p></br>'.format(path+filename))
        file.write('<div class="inner-card text-card"> <h2>Input</h2><hr>')
        file.write(f'<b>Material of the sample</b><div>{material}</br></div>')
        file.write(f'<b>Component usage time</b><div>{time} years</br></div>')
        file.write(f'<b>Maximum load capacity of the component</b><div>{max_load} MPa</br></div>')
        file.write(f'<b>Maximum load capacity of the component</b><div>{min_load} MPa</br></div></div>')

        crack_length, output, analysis, cycles = report_crack(length,breadth,time,material,max_load,min_load)
        file.write('<div class="inner-card text-card"><h2> Output</h2><hr>')
        color = 'poda' if 'not' in output.lower() else 'danger'
        file.write(f'<b> Crack status</b><div class="{color}">{output} </br></div> ')
        file.write(f'<b> Analysis of the sample </b><div>{analysis}</br> </div> ')
        file.write(f'<b> Approximate crack length </b><div>{crack_length:0.3f} Micrometer </br></div>')
        file.write(f'<b> Cycles since Damage (CrackDating™) </b><div>{int(cycles)} </br></div></div></div></center> </body></html>')


generate_report('./data/','201201004_LIMI_000929.jpg',0,0,2,'cast iron',1000,200)
# generate_pdf('./','Report_201506009_LIMI_007979.jpg.md')
