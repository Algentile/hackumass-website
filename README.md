# HackUMass Website
===
# Development Environment Setup

To get the HackUMass website up and running locally on your machine, you should make sure to install all of the necessary development dependencies listed below.
    * Node.js - http://www.nodejs.org
    * Bower - http://www.bower.io
    * Grunt - http://www.gruntjs.org
To check whether you have *Node.js* installed, run `node -v`.
To check whether you have *npm* installed, rum `npm -v`.
To install *Bower* globally on your machine, run *sudo npm install -g bower*.
To install *Grunt* globally on your machine, run *sudo npm install -g grunt-cli*.

# Installing Project Dependencies

First, `clone` the HackUMass website repository from GitHub in order to get a local copy of the site on your machine.
`git clone https://github.com/MichaelaShtilmanMinkin/Web.git`

Then `cd` to the project directory.
`cd Web`

Once you are in the HackUMass website directory, run the following commands to install the necessary development dependecies.
`sudo npm install`
`bower install`

Finally to execute various deployment tasks to start the web server locally on your machine, run
`grunt -f`

Now, if you navigate to `localhost:3000` from your web browser, you should be able to view the HackUMass website.
