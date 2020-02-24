# RTSP
This is an approach to repair test scripts efficiently for large web applications.

## Preparation of Testing Web Apps

1. Download the corresponding versions of the web applications.

   [Joomla 3.6.0 and Joomla 3.7.0](https://github.com/joomla/joomla-cms/releases)

   [dolibarr-6.0.0 and dolibarr-7.0.0](https://github.com/Dolibarr/dolibarr/releases)

   [moodle-3.4.0 and moodle-3.4.5](https://github.com/moodle/moodle/releases)  

2. And install these web apps   
   
   The database for them is mysql
   Database Configuration:
     * Host name:127.0.0.1
     * Username:root
     * passworld: 12345678
     * databaseName: Joomla_3_6_0 or Joomla_3_7_0 or 

   The login account for these web apps: 
     * account : admin, 
     * passworld : 123456

3. Then these web apps are ready to test.

   On my local computer machine, I set the port as **8888** , 
   So the Joomla URLs are :
     * http://localhost:8888/Joomla_3_6_0/administrator/ 
     * http://localhost:8888/Joomla_3_7_0/administrator/

   Adn Moodle URLs : 
     * http://localhost:8888/moodle-3.4.0/ 
     * http://localhost:8888/moodle-3.4.5/

   And Dolibarr URLs : 
     * http://localhost:8888/dolibarr-6.0.0/htdocs/index.php
     * http://localhost:8888/dolibarr-7.0.0/htdocs/index.php

## Instructions of Our approach

   Install mocha:
   ```
   npm install --global mocha
   ```

   Installation Steps of RTSP:   
   ```
   git clone https://github.com/chenweiLabri/RTSP
   npm install
   ```

   Set Steps:

     * Set the fileName in file  transferScenario.js (set the test script to test). 
       For example, const fileName = '/joomla/' + 'joomla001Login.js';

     * In this script, set the url of GotoAction, 
       For example, .goto("http://localhost:8888/Joomla_3_6_0/")//version 3.6.0
       Because the web apps are different and their releases are also different, so the goto urls differ.

   Run TSRP:

     `Mocha playToFix.js`

   