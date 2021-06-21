import os

debug=0

def get_all_paths(debug=0):
    dirname = os.path.dirname(__file__)
    project_folder_path = os.path.join(dirname, "projects_data")
    
    result_paths = []
    for (dirpath, dirnames, filenames) in os.walk(project_folder_path):
        for name in filenames:
            full_path = os.path.join(dirpath, name)
    
            path = os.path.relpath(full_path, dirname)
            if path[-3:].lower() in ['jpg', 'png', 'bmp']:
                result_paths.append( path )
    
    if debug:
        for idx, it in enumerate(result_paths):
            print(idx,it)
            
        print(result_paths)
    return result_paths

images_paths = get_all_paths(debug)

dirname = os.path.dirname(__file__)
file_path = os.path.join(dirname, 'js\\get_projects_data.js')

with open(file_path, 'r') as file :
  filedata = file.read()

begin_tag = r'//python generated data begin'
end_tag = r'//python generated data end'
begin = filedata.find(begin_tag)
end = filedata.find(end_tag)

insertion = r"let img_files = " + repr(images_paths) + ";"
new_content = filedata[:begin] + begin_tag + "\n\t\t" + insertion + " \n \t\t" + filedata[end:]
#let img_files = [
    
with open(file_path, 'w') as file:
  file.write(new_content)