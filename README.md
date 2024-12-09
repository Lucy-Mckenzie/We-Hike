# Welcome to We Hike 🥾
Here you can find the latest updates on hut alerts - as well as open and closures. Track information including distance and duration - including where to find it on the map. 

This project was started during boot camp, led by my passion for hiking and spending time in nature. Too often, I had friends leaving to go on hikes while being unprepared. I decided to put all the skills I had mastered during boot camp into an app that solved the one problem I had—finding all the information about huts and hikes in one place.

I used React Leaflet.js for the map, Leaflet has comprehensive documentation which made it very helpful for a beginner like me. The boot camp I attended (Dev Academy) emphasised guiding us to the right answer through documentation, thus developing my ability to think critically and adapt to new technology. 

# Problems and thought processes 
We Hike was the perfect place to develop and put my new skills to work, my Api came from the Department of Conservation which required a key to use. Integrating a data file the size of all the hikes in New Zealand was a fairly complex task at the beginning, I wasn't sure how to access the key. After trial and error, I figured the best way to store the key securely was in the .env secrets file. Making sure this code doesn't get pushed up to GitHub.

Testing the code with Test-driven development became a lot more complex as well. The backend was a little easier as it wasn't having to access the data, the frontend test, however, required mocking out a key, and routing - a fair step up from the classic test. With a little help from my facilitator, we solved it together. 

Another significant testing challenge was testing the Auth0, I love testing - It makes my day to see the red test go green. So I was all in for the challenge, the test for the Auth0 required nearly rewriting the functions and mocking out the Jwt request, and Auth0 user name. I feel more confident in my testing skills having built these complex tests.

The coordinates from the Api use NZTM a New Zealand coordinates system, I figured this out later in my project when trying to map over the Api and display the coordinates they ended up all over the place. I soon realised that Leaflet is an international map that only accepts WGS84 (lat, long), again I spent a lot of time researching this my facilitators didn't have any answers as they didn't know the technology. Eventually, I found Proj4 a coordinates translator that works by providing the previous coordinates and the new ones and translates them. 

While We Hike still has a lot of work, I am very proud of the organisation in the code base, and how far the application has gone so far. There are tests for components, Auth0, database, React Query, Mutations, React forms, Restful Apis, CRUD and accessibility friendly (try wave). 

Thank you for taking the time to read through, I am incredibly proud of my little app.
