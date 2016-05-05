<!doctype html>
<html lang="ru">
<head>
<title>| TerraZ | Collective</title>
<meta charset="utf-8">
<meta name="keywords" content="terraria, террария, сервер">
<meta name="description" content="TerraZ - Лучший русскоязычный сервер Terraria">
<meta http-equiv="cache-control" content="max-age=0" />
<link href="/css/main.css" rel="stylesheet" type="text/css" />
<script src="/js/fade.js"></script>
<script src="/js/main.js"></script>
</head>
<body>
<div id="portal">
<?php
$data = opendir('./img/jpg/');
 
 while ($one = readdir ($data))
 {
	if($one != '.' && $one != '..' && preg_match('#(.*)jp(e*)g$#i',$one))
	{
		$files[] = $one;
	}
}
closedir ($data);
?>
<a href='http://fun.terraz.ru/'><img style="visibility:hidden; width:350px; height:500px; border:1px solid:#990000;"  onload="fadePicture ('picture');" id=picture src='http://terraria-z.ru/img/jpg/<?php echo $files[array_rand($files)]; ?>' alt='Нажмите, чтобы войти' title='Нажмите, чтобы войти'></a>
</div>
</body>
</html>