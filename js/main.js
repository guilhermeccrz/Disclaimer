var tools = {
	center: function(element,relative){
		var element = $(element);
		var relative = $(relative);
		
		var windowWidth = relative.width();
		var windowHeight = relative.height();
		
		var elementWidth = element.width();
		var elementHeight = element.height();
		
		element.css('top',(windowHeight-elementHeight)/2);
		element.css('left',(windowWidth-elementWidth)/2);
		
		$(window).resize(function(){
			var windowWidth = relative.width();
			var windowHeight = relative.height();
			
			var elementWidth = element.width();
			var elementHeight = element.height();
			
			element.css('top',(windowHeight-elementHeight)/2);
			element.css('left',(windowWidth-elementWidth)/2);		
		});
	},
	 lightbox : {
		 
		loader: function(){
			//$('body > div').before('<div id="lightboxLoader" class="lightbox"><span>10%</span><span>20%</span><span>30%</span><span>40%</span><span>50%</span><span>60%</span><span>70%</span><span>80%</span><span>90%</span><span>100%</span></div><div class="overmask"></div>');
			//start animation loop 
			var loadStatus = '';
			var counter = 0;
			var finishStatus = '';
			
			var finishAnimation = setInterval(function(){
				if(finishStatus == 10){
					$('#lightboxLoader').addClass('active');
					$('#lightboxLoader,.overmask').delay(400).animate({opacity:0},1000);
				}else{
					finishStatus = 0;
					
					$('#lightboxLoader span').each(function(i){
						var el = $(this).attr('class');
						if(el == 'active'){
							finishStatus = finishStatus + 1;	
						}
					});
				}
			},200);
				
			var animation = setInterval(function(){
				if(counter == 9){
					counter = 0; 
					if(loadStatus == 100){
						$('#lightboxLoader span:eq('+counter+')').addClass('active');
						
					}else{
						$('#lightboxLoader span:eq('+counter+')').addClass('active'); $('#lightboxLoader span:eq(9)').removeClass();
					}
				}
				else{counter = counter+1;
					if(loadStatus == 100){
						$('#lightboxLoader span:eq('+counter+')').addClass('active');
					}else{
						$('#lightboxLoader span:eq('+counter+')').addClass('active');
						$('#lightboxLoader span:eq('+(counter-1)+')').removeClass('active');
					}
				}
			},200);
			
			var backgroundImage = $('<img />').attr('src','http://www.disclaimer.com.br/bgNew.jpg').load(function(){
				//clearInterval(animation);clearInterval(finishAnimation);
				loadStatus = 100;
				
			

				
			});
		
		}
		
	},
	angular: {

		appController: function($scope,$http){
			$scope.txt = Array();

			$scope.getData = function(){
				$http.get("js/text.json").sucess(function(data){
					$scope.txt = data.home.title;
					console.log($scope.txt);	
				}).error(function(data){
					alert('Error..');
					console.log(data);
				});

			}
		}

	}
	
}

var site = {
    init: function () {
		//tools.angular.appController();
		//set loader to center
		//tools.center('#lightboxLoader',window);
		//tools.lightbox.loader();
		$('#luz1').animate({opacity:1},2000);
		
			setInterval(function(){
					 
					 $('#luz1').animate({opacity:1},10000);
					
					 
					 
				 },10000);
		 
    }
}

//Angular Functions

function appController($scope,$http){
		$scope.txt = Array();

		$http.get("js/text.json").success(function(data){
			
			$scope.txt = data;
			console.log($scope.txt);	
		}).error(function(data){
			alert('Error..');
			console.log(data);
		});

	
}