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
- Backend dev (TBD)
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
- Frontend dev: index, packages, order, header, hamburger menu, footer
- Devops: version control with GitHub


### Frontend Tasks:
- To Do Items:Creating pages: home, contact, login, register, packages, order, 404, thank you.
Implementing same design across all pages to ensure professional look and functionality. 

### Frontend Notes:
- Problems encoutered and problem solving methodology
- Future improvements

### Backend Tasks:
- Paths & Endpoint handlers are defined

- Make the website dynamic:
  - Populate package section in index page from Database & display only the non-expired packages. For now, we have 9 pictures in database and 1 is expired. We have filtered this one expired package and displayed the rest in index page
  - Individual package page - all info's displayed in the pages are populated from database. Date validation is done & alerts are provided for packages that have start dates past current dates
  - Contact Us page - Agency & Agent info's included are populated from database

- Registration Page:
  - On the click of register button, data's keyed in by users are saved in Customer Table. System remembers them when they return next time.

- Booking Process --- code's included in /routes/addorder.js : 
  - Book Now button in Package page takes user to a booking confirmation page. This page will have a summary of the package details auto-generated from db. Users can choose to confirm booking.
  - A post action from booking page will create a booking record and a booking details records which are linked 
  - Users will be directed to a thank you page with all Info's included about chosen package, booking Id etc

### Backend Notes:
- Problems encoutered and problem solving methodology
- Future improvements

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
- [Inspiration from "expedia.ca"](https://www.expedia.ca/)
- [StackOverflow] (https://stackoverflow.com/)

## Contributors: 
- Tony Grimes, Instructor
- Nerds from TechCareers, Class of Summer 2020





