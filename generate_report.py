from mdutils.mdutils import MdUtils
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

    with open('Report.html','w') as file:
        file.write('<html> \n ')
        file.write('<head> <title>Report: {}  </title></head>'.format(filename[:-4]))
        file.write('<body> \n')
        file.write('<center><h1>Report: {}</h1><hr>'.format(filename[:-4]))
        file.write('<p><img src="{}" width="600"> </p></br>'.format(path+filename))
        file.write('<h3> Input Variable</h3></br><hr>')
        file.write(f'<b>Material of the sample:</b>{material}</br>')
        file.write(f'<b>Component usage time:</b>{time} years</br>')
        file.write(f'<b>Maximum load capacity of the component:</b>{max_load} MPa</br>')
        file.write(f'<b>Maximum load capacity of the component:</b>{min_load} MPa</br>')

        crack_length, output, analysis = report_crack(length,breadth,time,material,max_load,min_load)
        file.write('<h3> Output</h3></br><hr>')
        file.write(f'<b> Crack status:</b>{output} </br> ')
        file.write(f'<b> Analysis of the sample:</b>{analysis} </br> ')
        file.write(f'<b> Approximate crack length :</b>{crack_length} Micrometer </br></center>')
        


generate_report('./','201506009_LIMI_007979.jpg',5,4,2,'cast iron',1000,200)
# generate_pdf('./','Report_201506009_LIMI_007979.jpg.md')
