# Travel Experts Website by Json Byters
- TechCareers Cohort-4 Summer 2020
- PROJ-207 Website Prototype Presentation 1
- Project information is linked here https://cprg210.github.io/
## Team Name: Json Byters
- Team leader: Larisa Steigenberger
- Team members: Jaroslaw Czerwinski, Parvathy Sudhakaran, Stevyn Shen

## Group Charter
###### Larisa Steigenberger
- Team leader and Project Manager
  - Set up deadline and follow through
  - Divide the work according to the strength and priorities between team members
  - It was an easy task to be the team leader for this team. 
- Backend dev (TBD)
  - Set up database connection with MongoDB by using Studio 3T as a tool: ability to connect all the packages to the website and pull the information dynamically
  - Created authentification for the login and register page. Install multiple packages to achieve the goal: passport, passport-local, passport-local-mongoose, connect-flush. Prevent the user from accessing the booking page unless he/she is registered. Pop up message to indicate when the password/username is incorrect.
  - Set up Mongoose-sequence to be able to populate CustomerID, BookingID automatically, hence having unique ID for each model
  - "Thank you" page: able to fill all the information in the website directly from the database. All the connection between website/database was done in collaboration with Parvathy and css style from Stevyn and JC.
  - Added body-parser package to be able to pull req.body from the respond.
  - Cleaned up app.js by setting up routes folder and connecting the information to it

###### Pavarthy Sudhakaran
- Backend dev :



###### Jaroslaw Czerwinski
- Frontend dev: Working on design, and features of login, register, contact, and custom 404 pages. Major scope of my work was to create professionally looking pages that would have same layout, colors, backgrounds, sizes, to achieve required effect. I implemented some basic HTML form validation for customer input, the more robust validation of customer input is done on back end in our project through Mongoose Passport.  Most of front-end project was done by implementing HTML, CSS, and JavaScript. As a team we followed convention told in class for creating and separating code into specific groups like CSS files, HTML files, partials, views, public etc. We employed Git and GitHub for our collaboration and merging results of our individual work. 
###### Stevyn Shen
- Frontend dev: index, packages, order, header, hamburger menu, footer
- Devops: version control with GitHub


### Frontend Tasks:
- To Do Items:Creating pages: home, contact, login, register, packages, order, 404, thank you.
Implementing same design across all pages to ensure professional look and functionality. 

### Frontend Notes:
- Problems encoutered and problem solving methodology
- Future improvements

### Backend Tasks:
 1. Authentification Setup:
  - install passport, passport-local, passport-local-Mongoose, Local Strategy in app.js. Set up modification for the passport to work
  - in Routes/auth.js : set up LOGIN and LOGOUT routes to validate the user information against DB records.The function : isLoggedIn will check if user is registered and prevent him/her to  access certain pages ( in our case: order.js)
  - In CUSTOMER model there is plugin installed to check the validation of the user using passport-mongoose.

 2. Mongoose-sequence: 
 - Installed mongoose- sequence to auto-populate an ID for Customer, Booking and BookingDetail models ( plugin installed)

 3. Models connection:
  - ROUTES/ADDORDER.JS is  the page to perform the assigning the booking ID with bookingDetails to the currentuser. We were able to export the data from this page directly to the THANKYOU.ejs file. 
  -CUSTOMER and BOOKING models both have sub-model included to be able to use it in ADDORDER.js file
  

### Backend Notes:
- Problems encoutered and problem solving methodology
- Future improvements

## General Notes:
- Device test: dektop, iphone 
- Browser test: FireFox, Chrome
- [GitHub repo](https://github.com/protechshen/json_byters)

## Attributes: 
- [CPRG-210 - Web Application Development](https://cprg210.github.io/)
- [FontAwesome](https://fontawesome.com/license/free)
- [DesignCap](https://www.designcap.com/)
- [Google Fonts](https://developers.google.com/fonts)
- [Lorem Picsum](https://picsum.photos)
- [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Learn)
- [Inspiration from "expedia.ca"](https://www.expedia.ca/)

## Contributors: 
- Tony Grimes, Instructor
- Nerds from TechCareers, Class of Summer 2020





