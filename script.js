document.writeln("<!DOCTYPE html>");
document.writeln("html>");
document.writeln("body>");
document.writeln("<h2>HTML Forms</h2>");
document.writeln("<form action=/"/action_page.php/">");
document.writeln(" <label for=/"fname/">First name:</label><br>");
document.writeln(" <input type=/"text/" id=/"fname/" name=/"fname/" value=/"John/"><br>");
document.writeln(" <label for=/"lname/">Last name:</label><br>");
document.writeln(" <input type=/"text/" id=/"lname/" name=/"lname/" value=/"Doe/"><br><br>");
document.writeln(" <input type=/"submit/" value=/"Submit/">");
document.writeln("/form> ");
document.writeln("<p>If you click the /"Submit/" button, the form-data will be sent to a page called /"/action_page.php/".</p>");
document.writeln("</body>");
document.writeln("/html>");
