<section id="footer">
        	<div class="container-fluid">
        		<div class="row">
            		<div id="footer_text" class="col-md-12 clearfix">
                        <div class="footer-align">
                    	   Stay Golden Beatiful &hearts;
                        </div>
                        <!-- <p class="credits">Site Credits : <a href="http://ajackus.com/" target="_blank" class="upper">Ajackus</a></p>  -->

                    </div>
            	</div>
            </div>
        </section><!--END of FOOTER SECTION-->

        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-12823615-21', 'auto');
          ga('send', 'pageview');

        </script>
        <?php global $env;?>
		<!-- jQuery -->
        <?php if($env == 'PROD') { ?>
        <script src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
        <script src="js/main.min.js"></script>
        <?php } else { ?>

    	<script src="js/jquery-1.9.1.js"></script>
        <!-- Device -->
        <script type="text/javascript" src="js/devicejs/device.min.js"></script>
        <!-- Preloader -->
        <script type="text/javascript" src="js/preloader/jquery.queryloader2.js"></script>
    	<!-- Bootstrap -->
    	<script src="js/bootstrap/bootstrap.js"></script>
        <!-- Supersized -->
        <script type="text/javascript" src="js/supersized/jquery.easing.min.js"></script>
        <script type="text/javascript" src="js/supersized/supersized.3.2.7.min.js"></script>
        <script type="text/javascript" src="js/supersized/supersized.shutter.min.js"></script>
        <!-- Sticky -->
        <script type="text/javascript" src="js/sticky/jquery.sticky.js"></script>
        <!-- One Page Nav -->
        <script type="text/javascript" src="js/navjs/jquery.nav.js"></script>
        <!-- NiceScroll -->
        <script type="text/javascript" src="js/nicescroll/jquery.nicescroll.min.js"></script>
        <!-- Waypoint -->
        <script type="text/javascript" src="js/waypoint/waypoints.min.js"></script>
        <!-- Gmap -->
        <script src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
        <script type="text/javascript" src="js/gmap/jquery.gmap.min.js"></script>
        <!-- Magnific Popup -->
        <script type="text/javascript" src="js/magnific-popup/jquery.magnific-popup.min.js"></script>
        <!-- Masonry -->
        <script type="text/javascript" src="js/masonry/masonry.pkgd.min.js"></script>
        <!-- Owl Carousel -->
        <script type="text/javascript" src="js/owlcarousel/owl.carousel.js"></script>
        <!-- RSVP -->
        <script type="text/javascript" src="js/rsvp.js"></script>
        <!-- Style Switcher -->
        <script type="text/javascript" src="js/style-swithcer/stylesheet-switcher.js"></script>
        <!-- Custom Script -->
        <script type="text/javascript" src="js/script.js"></script>
        <?php } ?>
	</body>
</html>