<html>
<head>
	<title>jQuery DateSelect</title>
	<script src="../lib/jquery-2.1.1.js"></script>
	<script src="../lib/jquery.DateSelect-1.0.1.js"></script>
</head>
<body>
	<?php 
		$result =  "My Name is ".$_POST['Name']." and my birthday is on ".$_POST['year']."/".$_POST['month']."/".$_POST['date']; 
	?>
	<script> 
		alert('<?php echo $result; ?>');
		window.history.back();
	</script>
</body>
</html>	


