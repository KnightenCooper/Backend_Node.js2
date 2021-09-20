// Node.js-driven server running on port 3000

const http = require('http');

const routes = require('./prove01-routes');

const server = http.createServer(routes);

server.listen(3000);



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

