
/*(function get_all_images_from_project() {

    var element = document.getElementById("carousel_item_list");


    var NewP;
    var Text;

    for(var i = 0; i < 5; i++)
    {
        NewP = document.createElement("p"); // Create a p element
        Text = document.createTextNode(i + ""); // Create text to go inside with string value of i
        NewP.appendChild(Text); // Add text to p element
        element.appendChild(NewP); // Append newly-created p element to body element in DOM tree
    }
 
    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode("Water");         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("carousel_item_list").appendChild(node);  

 })();


function get_all_images_from_project(base, ext, result) 
{
    files = files || fs.readdirSync(base) 
    result = result || [] 

    files.forEach( 
        function (file) {
            var newbase = path.join(base,file)
            if ( fs.statSync(newbase).isDirectory() )
            {
                result = recFindByExt(newbase,ext,fs.readdirSync(newbase),result)
            }
            else
            {
                if ( file.substr(-1*(ext.length+1)) == '.' + ext )
                {
                    result.push(newbase)
                } 
            }
        }
    )
    return result
}

ext_file_list = recFindByExt('/mypath','ext')
*/
 $(document).ready(function(){  
   
    for(var i=0 ; i< 3 ; i++) {
        var path="./img/Figure_"+i+".png";
        $('<div class="carousel-item"><img src="'+path+'"></div>').appendTo('.carousel-inner');
        /*$('<li data-target="#carousel-example-generic" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators')*/
  
    }
    $('.carousel-item').first().addClass('active');
    //$('.carousel-indicators > li').first().addClass('active');
    $('#first_carousel').carousel();
  });