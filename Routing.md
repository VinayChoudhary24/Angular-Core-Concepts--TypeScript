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