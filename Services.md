# SERVICES:-- Acts as a Central Repository, as a Central Buisness Unit, Where You can Store, Where you can Centralize Code in.

  # Why to Use Services...
    *To reduce the code in Different Files.

  # Hierarchical Injector-- a dependency is something a class of ours will depend on, INJECTS a Instance of Class into the Component.
      
    #We inform Angular that we Require such an Instance By Adding a constructor to the class, to the component where we want to use.

    #1 AppModule -- Same Instance of Service is Available Application-Wide.

    #2 AppComponent -- Same Instance of Service is Available for all Components(but Not For Other Services).

    #3 -- Any other Component -- Same Instance of Service is Available for the Component and All its Child Components.

  # When we Want to Use a SERVICE into another SERVICE we need to ADD the Decorator @Injectable() into the SERVICE Where we want to Inject?use the Service.   