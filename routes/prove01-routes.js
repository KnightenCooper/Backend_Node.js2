// two routes: "/" and "/users"

// Return a greeting message on the "/" route

// Return a list of dummy users on the "/users" route

// Node.js-driven server running on port 3000

const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

  if (url === '/') {

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/users') {



    fs.readFile('users.txt', 'utf8', function(err, data) {
        if (err) throw err;

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><ul>');

        res.write(data); // uses the text from 'users.txt' to get the user data

        res.write('</ul></body>');
        res.write('</html>');
        return res.end();
        });


  }
  // Send a HTML response with some "Page not found text
  if (url === '/create-user') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split('=')[1]); // username=whatever-the-user-entered
      var fs = require('fs'); // declare fs for next line
      htmlText = "<li>" + parsedBody.split('=')[1] + "</li>";
      fs.appendFileSync('users.txt', htmlText); // use fs to add the user inputted name to the 'users.txt' so that it will be displayed on the /users page
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  }
};

module.exports = requestHandler;


// Sources Used: 
// https://pro.academind.com/courses/767386/lectures/13901623
// https://stackoverflow.com/questions/4037939/powershell-says-execution-of-scripts-is-disabled-on-this-system
// https://stackoverflow.com/questions/40359590/nodemon-command-is-not-recognized-in-terminal-for-node-js-server
// https://www.youtube.com/watch?v=4N0d8HhU5DE
// https://www.npmjs.com/package/nodemon
// https://stackoverflow.com/questions/3459476/how-to-append-to-a-file-in-node
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_string
// https://stackoverflow.com/questions/11246991/add-a-character-to-the-beginning-and-end-of-a-string
// https://www.geeksforgeeks.org/node-js-split-function/
// https://stackoverflow.com/questions/41335828/how-to-read-a-text-file-with-node-js-and-write-it-to-a-html-page/41335882
// https://www.codegrepper.com/code-examples/html/res.write+html+file
// https://coderrocketfuel.com/article/combine-two-strings-with-concat-in-node-js
// https://stackoverflow.com/questions/35887667/why-does-introducing-a-filewriter-delete-all-the-content-in-the-file
// https://nodejs.org/en/knowledge/file-system/how-to-write-files-in-nodejs/
// https://www.codegrepper.com/code-examples/javascript/node.js+read+text+file
// https://stackoverflow.com/questions/64935212/output-and-format-a-text-file-to-html-using-node-js
// https://stackoverflow.com/questions/9168737/read-a-text-file-using-node-js
// https://blog.logrocket.com/localstorage-javascript-complete-guide/
// https://www.youtube.com/watch?v=NxVCq4p0Kb0
// https://www.py4u.net/discuss/309383
// https://stackoverflow.com/questions/48743719/node-js-save-user-input-into-a-text-file

