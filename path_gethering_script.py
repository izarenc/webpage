import os

debug=0

def get_all_img_paths(debug=0):
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

def get_all_projects_data(debug=0):
    dirname = os.path.dirname(__file__)
    project_folder_path = os.path.join(dirname, "projects_data")
    
    main_img_paths = []
    titles = []
    descriptions = []
    for (dirpath, dirnames, filenames) in os.walk(project_folder_path):
        for name in filenames:
            full_path = os.path.join(dirpath, name)
    
            path = os.path.relpath(full_path, dirname)
            if path[-3:].lower() in ['jpg', 'png', 'bmp']:
                if path[-8:-4].lower() == 'main':
                    main_img_paths.append( path )
                    
            if path[-3:].lower() == 'txt':
                with open(path, 'r') as file :
                    filedata = file.read()
                title, description = filedata.split('\n', 1)
                titles.append( title )
                descriptions.append( description )
    
    if debug:
        for idx, it in enumerate(main_img_paths):
            print(idx,it)
            
        print(main_img_paths)
        print(titles)
        print(descriptions)
        
    return main_img_paths, titles, descriptions

def modify_file_data(filedata, begin_tag, end_tag, var_names, data):
   
    begin = filedata.find(begin_tag)
    end = filedata.find(end_tag)
    
    insertion = ""
    for var_name, datum in zip(var_names, data):
        insertion += "\n\t\t" + var_name + " = " + repr(datum) + ";"
    
    new_content = filedata[:begin] + begin_tag + insertion + " \n \t\t" + filedata[end:]
    return new_content
    
dirname = os.path.dirname(__file__)
file_path = os.path.join(dirname, 'js\\get_projects_data.js')

with open(file_path, 'r') as file :
  filedata = file.read()

images_paths = get_all_img_paths(debug)

begin_tag = r'//python generated data for carousel begin'
end_tag = r'//python generated data for carousel end'
filedata = modify_file_data(filedata, begin_tag, end_tag, [r"let img_files"], [images_paths])

projects_data = get_all_projects_data(1)
begin_tag = r'//python generated data for projects grid begin'
end_tag = r'//python generated data for projects grid end'
filedata = modify_file_data(filedata, begin_tag, end_tag, [r"let all_imgs", r"let all_titles", r"let all_descriptions"], projects_data)

with open(file_path, 'w') as file:
  file.write(filedata)