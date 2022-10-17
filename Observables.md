# Observables -- Various Data Sources (User Input) Events, HTTp Request, Triggered in Code... 
# WE ALWAYS SUBSCRIBE OBSERVABLES
                 * OBSERVABLE IS AN OBJEct WE IMPORT FROM A THIRD-PARTY PACKAGE -- RxJS

                 * There are Observables(it's Function) and a Observer(The CODE Written) and In the Middle the Stream(EVENTS) 

# In order to follow along smoothly with the course examples, make sure you install RxJS v6 by running

                 *npm install --save rxjs@6
          
          In addition, also install the rxjs-compat package:
                 *npm install --save rxjs-compat 

# Three Functions of Observables -- NEXT, ERROR, COMPLETION
      * USING NEXT to -- EMITTING NEW DATA
      * USING ERROR to -- HANDLE ERRORS -- when an observable throws a error it Dies.
      * USING COMPLETE to -- EMITTING NEW DATA

# Common Observables
     1-- params                 


# Operators -- MAGIC Feature of RxJS Library -- Helps us to Transform DATA
     * They are Called by PIPE() Method

# Subject -- With subject we can call the NEXT() from the OUTSIDE i.e from not inside the subscribe function
     * #Only use Subject<>() when Communicating Across Components Using Services. 
   
     * Subject is PERFECT for an EventEmitter CASE/SCENARIO

     * USE -- Variable = new subject<boolean>(); && we USE NEXT() to emit the Event not 
     emit() like EventEmitter