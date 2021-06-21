
 $(document).ready(function(){  
    //python generated data begin
		let img_files = ['projects_data\\blood_vessels\\crossP.PNG', 'projects_data\\blood_vessels\\crossV.PNG', 'projects_data\\blood_vessels\\handP.PNG', 'projects_data\\blood_vessels\\handV.PNG', 'projects_data\\blood_vessels\\squareP.PNG', 'projects_data\\blood_vessels\\squareV.PNG', 'projects_data\\blood_vessels\\zigzagP.PNG', 'projects_data\\blood_vessels\\zigzagV.PNG', 'projects_data\\heart_rate_simulator\\circuit.jpg']; 
 		//python generated data end

    for(var i=0 ; i< img_files.length ; i++) {
        var path="./img/Figure_"+i+".png";
        var path=img_files[i];
        $('<div class="carousel-item"><img src="'+path+'"></div>').appendTo('.carousel-inner');
        $('<li data-target="#carousel-example-generic" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators')
  
    }
    $('.carousel-item').first().addClass('active');
    //$('.carousel-indicators > li').first().addClass('active');
    $('#first_carousel').carousel();
  });