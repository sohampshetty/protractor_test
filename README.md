# Demonstration of Angular end to end testing using Protractor

# Getting Started with this application
#
# 

# 
# 
# Steps to run test cases follow steps...

1. Install Node.js and npm (You skip this if already installed).

2. Install protractor using npm. use command "npm install -g protractor"

	i. Try running "protractor --version" in command prompt to make sure it's working.

	ii. The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the 			necessary binaries with: try running "webdriver-manager update"  in command prompt.

	iii. Now start up a server with: "webdriver-manager start" in command prompt.

	iv. This will start up a Selenium Server and will output a bunch of info logs. Your Protractor test will send requests to this 		server to control a local browser. Leave this server running throughout the tutorial. You can see information about the status 	   of the server at http://localhost:4444/wd/hub

3. To run test cases 
	
	Open new command prompt in project dirctory and located to folder "test-cases".

	For ex. "cd D:\Workspace\angularjs_client\protractor_test\test-cases"

	and run command "protractor conf.js"

#
#
# To Cross check manually

1. Install http-server np module by command "npm install -g http-server"

2. Open a new command prompt and locate project directory 
	for eg. "cd D:\Workspace\angularjs_client\protractor_test"

3. Run command "http-server -o". Done........ It will open chrome.....Enjoy and Test application manually.
