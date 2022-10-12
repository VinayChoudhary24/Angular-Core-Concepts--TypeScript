# When a New Component is Created, Angular Gives us Couple of Different Phases to HOOK-UP Between the Process.

   #1 -- ngOnChanges -- called after a bound input property changes. runs multiple times

   #2 -- ngObInit -- called once the component is initialized.

   #3 -- ngDoCheck -- called during every change detection run. runs multiple times

   #4 -- ngAfterContentInit -- called after content (ng-content) has been projected into view/initialized.

   #5 -- ngAfterContentChecked -- Calle every time the projected content has been changed.

   #6 -- ngAfterViewInit -- called after the component view(and Child View) has been initialized.

   #7 -- ngAfterViewChecked -- called every time the view(and child view) have been checked.

   #8 -- ngOnDestroy -- called when the component is about to be destroyed .


# THE PROCESS/SEQUENCE OF THE EXECUTION FOR A COMPONENT

  CONSTRUCTOR({}) CALLED =>

  ngOnChanges({}) CALLED [WILL BE CALLED WHENEVER ANY CHANGE WILL OCCUR ON THE DEPENDENCY i.e IT IS DEPENDENT ON] =>

  ngOnInit({}) CALEED [WHEN THE OBJECT IS CREATED] =>  
  
  ngDoCheck({}) [CHECKS FOR] => 
  
  ngAfterContentInit({}) [RUNS ONCE AFTER THE <ng-content> INITIALIZED] => 
  
  ngAfterContentChecked({}) => 
  
  ngAfterViewInit({}) => 
  
  ngAfterViewChecked({}) =>

  ngOnDestroy({}) 




