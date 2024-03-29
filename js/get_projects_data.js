
 $(document).ready(function(){  
    //python generated data for carousel begin
		let img_files = ['projects_data\\blood_vessels\\crossP.PNG', 'projects_data\\blood_vessels\\crossV.PNG', 'projects_data\\blood_vessels\\handP.PNG', 'projects_data\\blood_vessels\\handV.PNG', 'projects_data\\blood_vessels\\squareP_MAIN.PNG', 'projects_data\\blood_vessels\\squareV.PNG', 'projects_data\\blood_vessels\\zigzagP.PNG', 'projects_data\\blood_vessels\\zigzagV.PNG', 'projects_data\\heart_rate_simulator\\1.png', 'projects_data\\heart_rate_simulator\\2.png', 'projects_data\\heart_rate_simulator\\3.png', 'projects_data\\heart_rate_simulator\\4.png', 'projects_data\\heart_rate_simulator\\5.png', 'projects_data\\heart_rate_simulator\\circuit.jpg', 'projects_data\\heart_rate_simulator\\MAIN.png', 'projects_data\\sleep_phase_detection\\Picture1_MAIN.png']; 
 		//python generated data for carousel end

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

$(document).ready(function(){  
    //python generated data for projects grid begin
		let all_imgs = ['projects_data\\blood_vessels\\squareP_MAIN.PNG', 'projects_data\\heart_rate_simulator\\MAIN.png', 'projects_data\\sleep_phase_detection\\Picture1_MAIN.png'];
		let all_titles = ['Computer modeling of blood vessel tree growth', 'Heart rate simulator', 'Classification of sleep phases'];
		let all_descriptions = ['\nThe purpose of the project was to generate blood vessel trees in the given volume.\n\nThe algorithm was implemented in Python with use of SciPy and NumPy libraries. Optimization methods were compared in terms of execution time. Ideas concerning detection of intersections and its removal were analyzed. Impact of those solutions and algorithm paremeters on the tree properties was analysed.\n\nThe optimized algorithm detected segment-segment intersection during execution time, not as post processing. Preliminary judgement if segments are close and if intersection checking is justified, made the algorithm much more effective then original.\n\nImplemented functions allowed to generate blood vessel trees inside certain volume stored as binary 3D image. The greater resolution and complexity of the volume the slower the execution is. It is also worth to remark that some regions may not be filled with vessels.\n\nMany features were implemented to improve blood vessel tree generation. The generated blood vessels thanks to algorithm modifications can be used in modelling of flow, because possible errors concerning intersections are avoided. ', '\nAim of the project was to create a simulator of electric activity of heart. First part of the project concerned a script written firstly in Python, and then in C language, that generated electrophysiological heart signal. Second part was to build a circuit that generates a signal in continuous mode with heart rate adjustable by potentiometer.\n\nEach wave was individually created to introduce noise and versatility. Generated signal was sent by Arduino to Digital-to-Analog converter.\nThe generated signal was measured on output, by connected oscilloscope. The potentiometer allowed to adjust heart rate. \n\nConstructed device could be useful during testing ECG equipment. It would be possible to check if it is secure, and how accurate measurement is. \n\n\n', '\nThe purpose of the project was to recognize sleep phases. The analyzed data was consisted of hypnograms, which are recordings of electrical brain activity during sleeping. \nA simple classifier was implemented in Python. The dataset was split into windows on which FFT was performed. Firstly, on training dataset a PCA was conducted in order to find the most meaningful frequencies of brain activity, then the kNN classifiers were trained. Both number of neighbours in kNN and number of features (from PCA) were found by hyperparameter analysis. \nFinal accuracy of the classifier was 87%.']; 
 		//python generated data for projects grid end

    for(var i=0 ; i< all_imgs.length ; i++) {
        var img = all_imgs[i];
        var title = all_titles[i];
        var description = all_descriptions[i];

        var html_to_insert = '    ' +
            '<div class="col">' + 
                '<div class="card m-3">' + 
                    '<img src="' + img + '"class="card-img-top"/>' + 
                    '<div class="card-body">' +
                      '<h5 class="card-title">' + title + '</h5>' +
                      '<p class="card-text para">' + description + '</p>' +
                    '</div>' +
                '</div>' +
            '</div>';
        $(html_to_insert).appendTo('#projects_grid');
  
    }
    //$('.carousel-item').first().addClass('active');
    //$('.carousel-indicators > li').first().addClass('active');
    //$('#first_carousel').carousel();
  });
/**/