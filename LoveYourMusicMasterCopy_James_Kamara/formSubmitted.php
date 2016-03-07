<!DOCTYPE html>

<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Love your music - Thank you</title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta name="Look at the changing taste in music with age" content="Music journey of the ages"/> 
		<meta name="Music, Age, Magical, journey, love" content="The Magical Music Age"/> 
		<!--[if lte IE 8]><script src="js/html5shiv.js"></script><![endif]-->
		<script src="js/jquery.min.js"></script>
		<script src="js/skel.min.js"></script>
		<script src="js/skel-layers.min.js"></script>
		<script src="js/init.js"></script>
		<noscript>
			<link rel="stylesheet" href="css/skel.css" />
			<link rel="stylesheet" href="css/style.css" />
			<link rel="stylesheet" href="css/style-xlarge.css" />
		</noscript>
		 
		<SCRIPT language="JavaScript"> 
        
			
        </SCRIPT>
			
		    <script src="js/formValidation.js"></script> 
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
		
	</head>
	<body >

		

		<!-- Three -->
			<section id="three" class="wrapper style3 special">
				<div class="container">
					<header class="major">
						<h2>Confirmation Message  </h2>
						
					</header>
				</div>
				<div class="container 50%">
				<!--form start-->			
			<h3>"Thank you for your message"</h3>
			<h4>"Please enjoy the rest of the site, even listen to music on the radio if you just want to relax and do your own thing. If you do want to update your thoughts or provide any comments to help improve the site then please feel free to do this, just log back and and send on a new message and I will happy for the advise, so thanks again for your interest and enjoy the music. "</h4>
			<p>"Confirmation: here are the details you entered"</p>
			
			        Welcome to Love your music: <?php echo $_GET["firstname"]; ?><br>
				    Your Surname is: <?php echo $_GET["lastname"]; ?><br>
					Your email address is: <?php echo $_GET["email"]; ?><br>
					Confirmation Email sent: <?php echo $_GET["copy"]; ?><br>
					Your Message was: <?php echo $_GET["message"]; ?><br>
					<?php date_default_timezone_set("Europe/Dublin");
					echo "Today is " . date("Y/m/d") . "<br>";
					echo "The time is " . date("h:i:sa"); ?>
				</div>
			</section>

		
			
	</body>
</html>



