## Notes from reading the homework


Networks and the internet
Computer networks have been around since the 1950s. This startes by putting cables between computers and sending and retrieving data.  However we started connecting the machines all over the world in the 1980.  We converted connecting devices in the same room to connecting devices all over the world.

Computers shoot bits to each other. The computers must know what te bits are representing and know how to interpret them. 
“The meaning of any given sequence of bits depends entirely on the kind of thing that it is trying to express and on the encoding mechanism used.”  A network protocol describes the style of communication over a network.  There are different protocols for different all different purposes, like sending an email or sharing files.

Hypertext Transfer Protocol (HTTP) is the protocol for receiving named resources. These named resources are chunks of info like pictures or web pages.  The client side request must start with a / followed by naming the resource, and the version of the protocol that it is trying to use.

HTTP uses the network as a stream device where we as users can input bits and let them arrive at the correct destination. 

TCP:  Transmission Control Protocol (TCP)  This protocols connection lets one computer listening/waiting till another computer starts making connection. 
To let a computer listen to multiple kind of communication, each listener gets a number, this is the port. 

All other computer can connect to the machine using the correct port number. When the device is listening to that port, the connection is created. -> Now the connecting computer is a client.


Web

The world wide web is a set of protocols and formats that make it possible for us to visit web pages in the browser. 

Connect a machine to the Internet and have it listen on port 80 with the HTTP protocol so that other computers can ask it for documents.

Each document on the Web is named by a Uniform Resource Locator (URL), which looks something like this:
  http://eloquentjavascript.net/13_browser.html
 |      |                      |                          |
 protocol              server               path

Machines connected to the Internet get an IP address, which is a number that can be used to send messages to that machine, and looks something like 149.210.142.219 or 2001:4860:4860::8888

To get rid of al those chaotic numbers, we can buy and set domain names. 

1. Find out what de adress/domain revers to
2. Use HTTP to make a connection with the server at the address and ask for the resource(html)
3. Server send back the document and visually displays it.


HTML

HTML: Hypertext Markup Language This is the document format used for web pages. An HTML document contains text, as well as tags that give structure to the text, describing things such as links, paragraphs, and headings.


The tags, wrapped in angle brackets (< and >, the symbols for less than and greater than), provide information about the structure of the document.

<!doctype html>, tells the browser to interpret the page as a HTML.

Head: info about the document (title and links to css/javascript)
Body: contains the document itself with the use of tags. (<h1> text headings.) 
Tags:
Define what the element purpose / is designed for. Every tag is opened opening < and closed > closing tag.

Some opening tags contain extra data. Like name or types. These are called attributes. Some tags need extra info so we give it to them with the use of attributes.  
<script> Allows the html page to make use of a script. The script will run as soon as <script> is read by the browser. Script gets the attribute src, for linking the script.js file that you created. It always needs to be closed with </script> Otherwise the whole page will be interpreted as script.  Also some attributes can contain a javascript program. <button> tag has an on click attribute, the value will run whenever the button is clicked.   

The DOCUEMNT OBJECT MODEL 
DOM

The browser receives a web page in html text and processes it. The browser build a model of the structure and visually display the page on screen. This representation is already integrated in javascript. 	Its a readable and editable (live) data structure.

Structure 
-Html
 -head
   -body open
    - p
   -body closed
 - footer


A tree structure is representable for the DOM browser document structure. “Each node may refer to other nodes, children, which in turn may have their own children. This shape is typical of nested structures where elements can contain subelements that are similar to themselves.”
This branch structure is the main similarity between a tree and the DOM . 
Finding elements

For searching through all these endless branches, we can use these different pieces of code: 
-document.body.getElementsByTagName("a")[0];
-document.getElementById("gertrude"); - document.getElementByClassName(“gertrude");  


 The DOM structure is editable. We can change the paren-child relationship ships.
This is possible by using: 

Add:  appendChild -> sets at end of list of children
insertBefore -> inserts the node given as the first argument 
Replace:
replaceChild -> replace child node with other

Create node:
document.createTextNode -> adding a new text node, insert to the document. 

Collection:Array.from. ->convert the collection to a real array


Create element:document.createElement ->  takes a tag name and returns a new empty node of the given type



ATTRIBUTES

Html allows it to set any attribute you want on nodes.  Use getAttribute and setAttribute to create and acces them in script.

 
LAYOUT The use of different elements effects the layout of the html. Paragraphs or headings take op the whole width, -> block elements
While links and storing elements are inline elements.
You can also change positions and heights in javascript by 
offsetWidth and offsetHeight. But its preferable to use css for style and javascript for dynamic/interaction and not for the style of the page. 

STYLING
We can use inline css to style the elements. Like using 
<p><a href="." style="color: green">Green link</a></p>
This is inline css, like the teachers told us on CMD, the right way of styling your page is using css for this. Not inline css in your html document.

CSS stands for Cascading Style Sheets
“The cascading in the name refers to the fact that multiple such rules are combined to produce the final style for an element”  QUERY SELECTORS
Returns all elements.
querySelectorAll -> Takes a selector string and returns a NodeList containing all the elements that it matches. (Not live)


POSITIONING AND ANIMATING
We can use the position property to create animation.
We change te static status to relative, to make it dynamic on the page. With the use of the animation- properties we can create and run little animations on the html. The article talks about requestAnimationFrame. But I prefer to use css keyframes to control my animations.

