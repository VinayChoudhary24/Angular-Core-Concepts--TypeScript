# ROUTING -- Adding Multiple Pages

   # Registering Routing at the App.Module is the perfect Place to Inform Angular About the Applicaton Routing.

      # Absolute Path:- With the SLASH '/' at the Beginning, which will APPEND to the ROOT Domain.

      # Relative Path:- without SLASH or with './', which means Added to the CURRENTLY Loaded Path

      # To Load a New Page When Click -- To Load a New Page We Need to Inject Router in the Component

      # RXJS is the PACKAGE that Provides OBSERVABLES i.e THIRD_PARTY PACKAGES import { Subscription } from 'rxjs'

      # Params -- Passing Dynamic parameter to the URL -- initialize them inside ngOnInit() { .subscribe( () => {} ) }

      # Query Params -- parameters starts by a QUESTION MARk (?) and saperated by & --initialize them inside ngOnInit() { .subscribe( () => {} ) }

      # fragments -- initialize them inside ngOnInit() { .subscribe( () => {} ) }

      # CHILD(nested) Routes -- Adding the children Property to the PATH we want for Child Routing i.e In the App.Module.ts PATHS
          #ACCESS CHILD ROUTES -- Now Thet Requires a Saperate <ROUTER-OUTLET> i.e Now add the router-outlet inside the PARENT COMPONENT

      # RouteGuards -- Functionality, Logic, Code which is executedd before a route is loaded or when you want to Leave a Route.
          canActivateGuard

      # INTERFACE -- it Works Like DESTRUCTURING the Code which will be Used Alot..

      # Location Strategies -- This is for the ENVIRONMENTAL VARIABLES i.e the Development variables and the Deployment Variables, to make sure that the Development variables are PASSED to the Deployment Environment and The URL WORKS for Different Devices and the BROWSERS...
            * Some OLD Browsers Dont Return index.html file when 404 error Occurs, so we Use useHash.. after this the web Server only Cares About the Part Before the # in the URL

      #     // Add Router to use thr Routing functionality -- For RELATIVE PATH
           //  Add ActivatedRoute to tell the -- CURRENT PATH 

      # .subscribe -- when we .subscribe to any function we dont need to ngDestroy(clean-up) the subscription because Angular does that for us but when we create our own OBSERVABLES we need to ngDestroy Them.       