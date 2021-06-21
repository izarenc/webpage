import os

dirname = os.path.dirname(__file__)
project_folder_path = os.path.join(dirname, "projects_data")

f = []
for (dirpath, dirnames, filenames) in os.walk(project_folder_path):
    for name in filenames:
        full_path = os.path.join(dirpath, name)

        path = os.path.relpath(full_path, dirname)
        if path[-3:].lower() in ['jpg', 'png', 'bmp']:
            f.append( path )
#jpg, png bmp 
for idx, it in enumerate(f):
    print(idx,it)
    
print(f)
