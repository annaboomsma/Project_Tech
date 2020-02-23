# Week 1
This is the first week we started with backend. I already followed this course 2 years ago, but it really suprised me how little I remembered and understood. So I started with understanding the basics.

*My notes are often mixed in dutch and english, to increase my understanding.

## Node
Node is een opensource runtime environment om javascript te runnen buiten de browser om. Eerst werkte js namelijk alleen in browser.
Ze pakte de snelste javascript engine, v8 van google.
En gooide het in c++ program-> node is een javascript engine die de javascript kan runnen. Niet dezelfde objecten meer.
Nu kunnen we voor JavaScript ontwikkelen en testen zonder dat je daarbij een browser nodig hebt. 

Een runtime environment zet een bepaalde taal, zoals Javascript, om in machinetaal die een computer kan uitvoeren. Het grote onderscheid met Javascript op een webpagina is dat er bij het gebruik van Node.js geen echte browser aan te pas komt en de code op de machine zelf wordt uitgevoerd. Zo kan Node.js toegang krijgen tot functionaliteit eigen aan een besturingssysteem, zoals lokale bestanden, netwerkprotocollen, geheugen en CPU gebruik, enz

Node.js werkt met een asynchrone afhandeling van opdrachten. Dit betekent dat er slechts één thread instaat voor het uitvoeren van opdrachten, maar dat er niet gewacht wordt op de afhandeling van één opdracht vooraleer verder te gaan met de volgende


document.getElementById(“); X

Nu gebruiken bijv
 fs.readFile()
http.createServer

Node geeft mogelijkheid om jaarscrit en andere modules te gebruiken die niet in browser mogelijk zijn. 
Node is geen taal, het is een runtime environment for executing javascript.

- Highly scalable
- Data intensive
- Real time apps

## Express
Express is een web framework voor nodeJS. Dit is de wisselwerking van browser en server. De browser stuurt een request en de server eene response.(req,res)

Requesten:
- req.body
- req.ip
- req.query

Response:
- res.json
- res.render
- res.redirect

##### Express is dus een hulpmiddel om deze communicatie te laten verlopen.

De eerste twee principes waar we kennis mee maken en oefeningen mee moeten doen zijn: **routing and serving.
### Routing

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).
Each route can have one or more handler functions, which are executed when the route is matched.
Route definition takes the following structure:
app.METHOD(PATH, HANDLER)

Where:
* app is an instance of express.
* METHOD is an HTTP request method, in lowercase.
* PATH is a path on the server.
* HANDLER is the function executed when the route is matched.

### Serve static files

To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
The function signature is:
express.static(root, [options])
The root argument specifies the root directory from which to serve static assets.

To create a virtual path prefix (where the path does not actually exist in the file system) for files that are served by the express.static function, specify a mount path for the static directory, as shown below:
app.use('/static', express.static('public'))

However, the path that you provide to the express.static function is relative to the directory from where you launch your node process. If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve:
app.use('/static', express.static(path.join(__dirname, 'public')))

#### Route paths
Route paths, in combination with a request method, define the endpoints at which requests can be made. Route paths can be strings, string patterns, or regular expressions.

This route path will match requests to /about.

app.get('/about', function (req, res) {
  res.send('about')
})



## NPM
Dit is een Node Package Manager. Modules kan je uit deze NPM halen. 
Node package manager -> online platform en command line tool.
Deze packages kunnen gaan helpen bij het bouwen van je applicatie. 
Wanneer installeren zeg je NPM install … name package. Package.json is eigenlijk je settings file/config. Hier zet je alle dependencies in. NPM init -> maakt package.json 

In je dependencies staan je geinstalleerde packages die nodig zijn. 
DevDependencies zijn de packages die gebruikt zijn om je eigen ontwikkel proces mogelijk te maken, deze zijn dus niet perse nodig om de applicatie te kunnen runnen. Maar ze maken het je wel makkelijkerer bij het coderen.


