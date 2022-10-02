CAPSTONE PROJECT - Bug Logger App - Bugger

1.- created two new repos and succesfully deployed them to heroku
    • Backend repo https://lit-caverns-62565.herokuapp.com
    • Frontend repo https://buggerf.herokuapp.com
        • both repos are up and running but are not connected through routes or axios yet.
        •

2.- started working on the frontend, by creating components and adding some vanilla css just to kick things off in the right direction. 
    • Routes from the backend seem to be working on postman, but will have to see once we fully develop CRUD.

3.- succesfully deployed frontend app into heroku wihtout any errors, this may change once the full CRUD has been achieved
    • Will keep track of ongoing bugs via the application itself. Additionally, once full CRUD functionality is met, more functionalities will be added. Such as: Search bar for all existing bugs, gatekeeper functionality, share functionality, and Auth integration will be last just to make sure that everything is running smoothly. 

4.- The Bugger app is looking good so far with the bootstrap & vanilla CSS additions. No CRUD functionality yet, as that will come tomorrow once we have established a good skeleton to work on. 

5.- Animations and transitions might be implemented if the timeline allows, THREE.JS is looking like a good option but will require some more research in order to integrate. 

6.- Friday update - finishing frontend skeleton and setting up routes
    • finished frontend HTML hardcode. Will be adding additional components tomorrow

7.- Saturday - Update Add additional components and achieve full CRUD and start implementing the app into our process

8.- Sunday - update add additional styling, along with animations and transitions

9.- Monday - FULL CRUD HAS BEEN ACHIEVED -- Deploy on Heroku worked semi-seamlessly. Had to import some components differently since I am using folders for each. 

    • MongoDB is working flawlessly
    • All routes work
    • I will now work on additional functionality with react...including MUI material for a search bar to search all current bugs by fuzzy search...ish. 

10.- Tuesday update - Search bar implementation and react animaiton?
    •adding a new create route for the search bar
    • heroku did not take the search bar functionality, there are some compiling issues
    • compiling issues were resolved by correcting all of the warnings that appeared on application launch
    • app responsiveness was improved after eliminating all warnings

11.- Wednesday Update - Easter egg Java Game addition?
    • easter egg java game addition was scrapped due to heroku not being able to render the application...H10 error is currently being worked on

12.- Thursday update - portfolio check and merge
    • heroku is not working with the current react configuration
    • H10 error seems to be coming from the frontend of the application.
    • H10 error has been semi resolved by taking out unused packages and components. Application now launches and compiles without errors but crashes upon page reload...H10 error persists

13.- Friday Update - Heroku H10 error has been resolved. 
    • H10 error was fixed by downgrading the heroku-22 to heroku-20 and using the react buildpack that was deprecated. 
    • all routes work, all apps work and are hosted. 
    • all links to portfolio work and portfolio has been corrected/modified to include all hosted projects and links to relevant pages
    •portfolio has been updated to reflect new animations, new image additions, mobile display fixes, image rendering fixes, video display fixes, grammar corrections. 
    • portfolio has been updated to display on all devices with 0 erorrs
    • in the event that the page 1 intro video cannot be rendered...an image will be in place as backup
    • safari browser has some issues displaying some buttons, will work on the webkit to see if we can fix the CSS

14.- Saturday Update - BREAK

16.- Sunday Update - Finishing touches and wrap up

    • Oauth with github proved to be difficult to implement on the application since we have already deployed, we will need more time to adequately implement it without breaking anything
    • fixing minor display issues and taking out all commented lines for readability 
    • website is fully hosted and using the domain from bluehost...we are done



