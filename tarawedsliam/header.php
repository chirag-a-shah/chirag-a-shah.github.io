<?php require_once($_SERVER['DOCUMENT_ROOT'].'/config.php');
	  global $env;
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
     	<meta content="width=device-width, initial-scale=1.0" name="viewport">
     	<meta name="description" content="LUV - Responsive One Page HTML Wedding Template" >
      	<meta name="author" content="www.dethemes.com">
      	<link rel="shortcut icon" href="favicon.ico" />
      	<title>Himanshi Dand</title>
        <!-- Bootstrap -->
        <?php if($env == 'PROD') { ?>
        <link rel="stylesheet" href="css/main.min.css" media="screen">
    	<?php } else { ?>
        <link rel="stylesheet" href="css/bootstrap/bootstrap.min.css" type="text/css" media="screen" />
        <!-- Supersized -->
        <link rel="stylesheet" href="css/supersized/supersized.css" type="text/css" media="screen" />
        <link rel="stylesheet" href="css/supersized/supersized.shutter.css" type="text/css" media="screen" />
        <!-- Animate -->
        <link rel="stylesheet" href="css/animate/animate.css" type="text/css" media="screen" />
        <!-- Magnific Popup -->
        <link rel="stylesheet" href="css/magnific-popup/magnific-popup.css" type="text/css" media="screen" />
        <!-- Owl Carousel -->
        <link rel="stylesheet" href="css/owlcarousel/owl.carousel.css" type="text/css" media="screen" />
        <link rel="stylesheet" href="css/owlcarousel/owl.theme.css" type="text/css" media="screen" />
        <!-- Font -->

        <!-- Theme CSS -->
    	<link href="css/style.css" rel="stylesheet" media="screen">
    	<link href="css/custom.css" rel="stylesheet" media="screen">
    	<link href="css/fonts.css" rel="stylesheet" media="screen">
    	<?php } ?>
    	<link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=PT+Sans:400,700,400italic' rel='stylesheet' type='text/css'>

        <!-- Skin CSS - Create alternate theme color. Just remove the comment tag from the css below -->
    	<!-- <link href="css/skin/pink.css" rel="stylesheet" media="screen"> -->
        <!-- <link href="css/skin/purple.css" rel="stylesheet" media="screen"> -->
        <!-- <link href="css/skin/brown.css" rel="stylesheet" media="screen"> -->

        <!--[if IE 9]>
        <style>
			#footer_text{
				margin-bottom: -20px; /*for fixing ie bug */
			}
        </style>
		<![endif]-->
	</head>
	<body>
		<div id="start_preloader"></div>
		<div id="style_switcher" >
            <a id="reset" href="#"><span class="color_pallete"></span></a>
            <a id="pink" href="#"><span class="color_pallete"></span></a>
            <a id="purple" href="#"><span class="color_pallete"></span></a>
            <a id="brown" href="#"><span class="color_pallete"></span></a>
            <a id="theme_options" href="#"> <span class="glyphicon glyphicon-cog"></span></a>
	    </div>
	    <section id="home">
			<!-- <img src="images/banner.jpg"> -->
			<div id="logo_wrapper" class="container">
				<div class="row">
					<div class="col-md-1">
                    	<a id="logo_link" href="#home">
                    		<span id="logo" class="animation">
                        		<p>HIMANSHI <span class="glyphicon glyphicon-heart"></span> DAND</p>
                        	</span>
                        </a>
                    </div>
				</div>
            </div>
            <div class="container">
            	<div id="slide_content" class="row">
                	<div class="col-md-4 pull-right text-right">
                    	<div class="heart_row">
							<span class="glyphicon glyphicon-heart"></span>
							<span class="glyphicon glyphicon-heart"></span>
							<span class="glyphicon glyphicon-heart"></span>
							<span class="glyphicon glyphicon-heart"></span>
							<span class="glyphicon glyphicon-heart"></span>
							<span class="glyphicon glyphicon-heart"></span>
							<span class="glyphicon glyphicon-heart"></span>
							<span class="glyphicon glyphicon-heart"></span>
						</div>
						<div id="slide_text">
                            <span id="slide_text1">WISH YOU</span><br>
                            <span id="slide_text2">A VERY</span><br>
                            <span id="slide_text3" >HAPPY BIRTHDAY</span><br>
                            <div id="slide_text4">
                            	07<span class="glyphicon glyphicon-heart"></span>02<span class="glyphicon glyphicon-heart"></span>2019
                            </div>
						</div>
                        <div class="heart_row">
							<span class="glyphicon glyphicon-heart"></span>
							<span class="glyphicon glyphicon-heart"></span>
							<span class="glyphicon glyphicon-heart"></span>
							<span class="glyphicon glyphicon-heart"></span>
							<span class="glyphicon glyphicon-heart"></span>
							<span class="glyphicon glyphicon-heart"></span>
							<span class="glyphicon glyphicon-heart"></span>
							<span class="glyphicon glyphicon-heart"></span>
						</div>
                    </div>
                </div>
            </div>
            <header>
            	<nav id="nav" class="navbar navbar-default" role="navigation">
  					<div class="container">
    					<!-- Brand and toggle get grouped for better mobile display -->
    					<div class="navbar-header">
      						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#nav_menu">
        						<span class="sr-only">Toggle navigation</span>
        						<span class="icon-bar"></span>
        						<span class="icon-bar"></span>
        						<span class="icon-bar"></span>
     						</button>
   						</div>

    					<!-- Collect the nav links, forms, and other content for toggling -->
   					 	<div class="collapse navbar-collapse" id="nav_menu">
     						<ul id="nav_list" class="nav navbar-nav navbar-right">
        						<li class="active"><a href="#home">Home</a></li>
                                <li><a href="#couple">The Couple</a></li>
                                <li><a href="#wedding">The Wedding</a></li>
                                <li><a href="#clothing">Clothing</a></li>
                                <li><a href="#accomodations">Accomodation</a></li>
                                <li><a href="#dances">Dances</a></li>
                               <!--  <li><a href="#bridesmaid">Bridesmaid</a></li>
                                <li><a href="#groomsmen">Groomsmen</a></li> -->
                                <li><a href="#gallery">Gallery</a></li>
                                <li><a href="#travel">Travel</a></li>
                                <li><a href="#celebrations">UK Celebrations</a></li>
                                <li><a href="#registry">Gifts</a></li>
                                <!-- <li><a href="#registry">Registry</a></li>
                                <li><a href="#blog">Blog</a></li>
                                <li><a href="#rsvp">RSVP</a></li> -->
     						</ul>
   						</div><!-- /.navbar-collapse -->
  					</div><!-- /.container -->
				</nav>
            </header>
        </section><!--END of HOME SECTION-->
