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

###### Parvathy Sudhakaran
- Backend dev 
  - Transform static website into dynamic mode 
    - Travel Package Section -- in Main page & Packages page
      - Used fetch to populate package listing in main page
      - Whole package page is populated from database -- Details includes start date, end date and price, description and image
      - Coding to ensure only valid packages are included in the display for users(The expired packages are filtered out automatically)
      - Ensures, that the user is alerted if package start date is past current date

    - Populate contact page from database
      - Lists all the agencies & corresponding agents 

  - Backend development coding for Booking order process(team work with Larissa)
    - On order booking - The system detects the user and identifies which package they have chosen. With this info, create a booking record and further create a booking details record for this  newly created booking record
    - Making the order form auto-fill from database 
    - Date formatting in all pages
    - Generating welcome message for newly registered users
    

###### Jaroslaw Czerwinski
  - Frontend dev: Working on design, and features of login, register, contact, and custom 404 pages. Major scope of my work was to create professionally looking pages that would have same layout, colors, backgrounds, sizes, to achieve required effect. I implemented some basic HTML form validation for customer input, the more robust validation of customer input is done on back end in our project through Mongoose Passport.  Most of front-end project was done by implementing HTML, CSS, and JavaScript. As a team we followed convention told in class for creating and separating code into specific groups like CSS files, HTML files, partials, views, public etc. We employed Git and GitHub for our collaboration and merging results of our individual work. 
###### Stevyn Shen
  - Frontend dev: Veiws, partials, and css styling of the following index, packages, order, header, footer. 
  - Devops: Version control with GitHub. Guiding team members to work on local branch and merge to master.

### Frontend Tasks & Notes:
- Create frontend pages: home, contact, login, register, packages, order, 404,
- Implemented same design across all pages to ensure consistend look and functionality. 
- Responsiveness: website friendly for mobile and desktop screen size (hamburger menu available in mobile view)
- Responsiveness: ensure form containers adjusted to different screen size (media query)
- Some problems with styling we encounter during the process of this project we resolved by implemeting specific standards for all pages. Our standards included colors, fornts, backrounds and overall visual consistency of all pages accross the board. 
Problem solving we did through group discussions and implementing brain storming. 

- Future improvements:
  - Google Maps integration to Contact page
  - Confirmation/ThankYou page once user message successfully submitted 
  - Form validation with JS (clear and concise messages to help user to fill Forms as our database desires)
  - Current page indication / highlighting 
  - Future improvements to our website could include some animation to make already attractive pages alive. 
  - We would implemet social media conections as well. 
  
### Backend Tasks & Notes:
  
1. Paths & Endpoint handlers are defined
2. Make the website dynamic:
  - Populate package section in index page from Database & display only the non-expired packages. For now, we have 9 pictures in database and 1is expired. We have filtered this one expired package and displayed the rest in index page
  - Individual package page - all info's displayed in the pages are populated from database. Date validation is done & alerts are provided forpackages that have start dates past current dates
  - Contact Us page - Agency & Agent info's included are populated from database

3. Registration Page:
  - On the click of register button, data's keyed in by users are saved in Customer Table. System remembers them when they return next time.

4. Authentification Setup:
  - install passport, passport-local, passport-local-Mongoose, Local Strategy in app.js. Set up modification for the passport to work
  - in Routes/auth.js : set up LOGIN and LOGOUT routes to validate the user information against DB records.The function : isLoggedIn will check if user is registered and prevent him/her to  access certain pages ( in our case: order.js)
  - In CUSTOMER model there is plugin installed to check the validation of the user using passport-mongoose.

5. Mongoose-sequence: 
  - Installed mongoose- sequence to auto-populate an ID for Customer, Booking and BookingDetail models ( plugin installed)

6. Models connection:
  - ROUTES/ADDORDER.JS is  the page to perform the assigning the booking ID with bookingDetails to the currentuser. We were able to export the data from this page directly to the THANKYOU.ejs file. 
  -CUSTOMER and BOOKING models both have sub-model included to be able to use it in ADDORDER.js file

7. Booking Process --- code's included in /routes/addorder.js : 
  - Book Now button in Package page takes user to a booking confirmation page. This page will have a summary of the package details auto-generated from db. Users can choose to confirm booking.
  - A post action from booking page will create a booking record and a booking details records which are linked 
  - Users will be directed to a thank you page with all Info's included about chosen package, booking Id etc
  

## General Notes:
- Device test: desktop, iphone 
- Browser test: FireFox, Chrome
- [GitHub repo](https://github.com/protechshen/json_byters)

## Attributes: 
- [CPRG-210 - Web Application Development](https://cprg210.github.io/)
- [FontAwesome](https://fontawesome.com/license/free)
- [DesignCap](https://www.designcap.com/)
- [Google Fonts](https://developers.google.com/fonts)
- [Lorem Picsum](https://picsum.photos)
- [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Learn)
- [CSS-Tricks](https://css-tricks.com/)
- [Inspiration from "expedia.ca"](https://www.expedia.ca/)
- [StackOverflow] (https://stackoverflow.com/)

## Contributors: 
- Tony Grimes, Instructor
- Nerds from TechCareers, Class of Summer 2020





