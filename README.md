# Welcome to We Hike 🥾
Here you can find the latest updates on hut alerts - as well as open and closures. Track information including distance and duration - including where to find it on the map. 

![Wehike logo](/public/images/logo.png)

# Design Brief:
This project was started during boot camp, led by my passion for hiking and spending time in nature. Too often, I had friends leaving to go on hikes while being unprepared. I decided to put all the skills I had mastered during boot camp into an app that solved the one problem I had—finding all the information about huts and hikes in one place.

<div width="300" height="200">
![Wehike logo](/public/images/about.jpg)
</div>

I used React Leaflet.js for the map, Leaflet has comprehensive documentation which made it very helpful for a beginner like me. The boot camp I attended (Dev Academy) emphasised guiding us to the right answer through documentation, thus developing my ability to think critically and adapt to new technology. 

# Built With:
React, Typescript, Node.js, Express.js, vitest, nock, auth0, Department of Conservation API, TailwindCSS, PostGreSQL.

## Installation
1. Clone the repository:
```bash
 git clone git@github.com:Lucy-Mckenzie/We-Hike.git
```
2. Navigate to project directory:
```bash
cd we-hike
```

3. Install dependencies:
```bash
 npm install
```

4. Start the deployment server:
```bash
npm run dev
```

# Problems and thought processes 
<ul>
<li>
  <strong>We Hike was the perfect place to develop and put my new skills to work, </strong>
  The Api came from the Department of Conservation which required a key to use. Integrating a data file the size of all the hikes in New Zealand was a fairly complex task at the beginning, I   wasn't sure how to access the key. After trial and error, I figured the best way to store the key securely was in the .env secrets file. Making sure this code doesn't get pushed up to        GitHub.
</li><br><br>
<li>
  <strong>Testing the code with Test-driven development</strong>
   This was a litle more complex than the tests we have previouslhy done durring bootcamp. The backend was a little easier as it wasn't having to access the data and could use the 'nock' 
   framework. The frontend test, however, required mocking out a key, and routing - a fair step up from the classic test. With a little help from my facilitator, we solved it together. 
</li><br><br>
<li>
 <strong>Another significant testing challenge </strong>
   Testing the Auth0, I love testing - It makes my day to see the red test go green. So I was all in for the challenge, the test for the Auth0 required nearly rewriting the functions and 
   mocking out the Jwt request, and Auth0 user name. I feel more confident in my testing skills having built these complex tests.
</li><br><br>
<li>
  <strong>Another significant testing challenge </strong>
  Testing the Auth0, I love testing - It makes my day to see the red test go green. So I was all in for the challenge, the test for the Auth0 required nearly rewriting the functions and 
  mocking out the Jwt request, and Auth0 user name. I feel more confident in my testing skills having built these complex tests.
</li><br><br>
<li>
  <strong>The coordinates from the Api</strong>
DOC-API uses NZTM a New Zealand coordinates system, I figured this out later in my project when trying to map over the Api data and display the coordinates, which ended up all over the world. I soon realised that Leaflet is an international map that only accepts WGS84 (lat, long), I spent a lot of time researching different ways to convert NZTM to WGS84. Eventually, I found Proj4 a coordinates translator that works by providing the previous coordinates and the new ones and translates them. 

An Example of NZTM:
```
E1845100,N5743800
```
And WGS84:
```
38.8951° N, -77.0364° W
```
</li><br><br>
<li>
  <strong>Another significant testing challenge </strong>
  Testing the Auth0, I love testing - It makes my day to see the red test go green. So I was all in for the challenge, the test for the Auth0 required nearly rewriting the functions and 
  mocking out the Jwt request, and Auth0 user name. I feel more confident in my testing skills having built these complex tests.
</li><br>
</ul>

# Whats next?
While We Hike still has a lot of work, I am very proud of the organisation in the code base, and how far the application has gone so far. There are tests for components, Auth0, database, React Query, Mutations, React forms, Restful Apis, CRUD and accessibility friendly. 
<br><br>
* I am currently having issues displaying the alerts, I created a function that could retrieve the data with the top 10 results. Which was working for the first week and then I started receiving HTML status code 500. I assume that it's a problem with the paths in my backend when calling it.<br><br>
* Implementing functionality to save places on the map, during boot camp we did create an app that could save the user's pinpoint to a location but it was created by a colleague who jumped through hoops to get it going. This is next on the cards.<br><br>
* And finally, I would like to add weather to the locations, this was my idea at the beginning which I think will be fairly uncomplicated but we will see.<br><br>

  
## License
This project is licensed under the [MIT License](LICENSE).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

Thank you for taking the time to read through, I am incredibly proud of my little app.
