---
const pageTitle = "Home Page";
---

<?php
$name = $_POST["fullname"];
$email = $_POST["email"];
$file = "subscribers.json";
$tempfile = fopen($file, "r");

if ($tempfile != false && filesize($file) > 0) {
  $jsonobj = fread($tempfile, filesize($file));
  fclose($tempfile);
  $arr = json_decode($jsonobj, true);
  $length = count($arr);
} else {
  $arr = array();
  $length = 0;
}

$arr[$length + 1] = array($name, $email);
$jsonobjNeu = json_encode($arr);
$tempfile = fopen($file, "w+") or die("Unable to open file!");
fwrite($tempfile, $jsonobjNeu);
fclose($tempfile);
echo "<h1>Glückwunsch " . $name . "!</h1>";
echo "<p>Du hast dich erfolgreich für den Newsletter registriert.</p>";
echo "<a href='/index'>Zurück zu Yummy</a>";
?>