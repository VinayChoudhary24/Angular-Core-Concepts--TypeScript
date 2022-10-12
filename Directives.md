# Directives -- Are Instructions in the DOM!

# There are Many BUILT-IN Directives:--
    #1 -- *ngIf -- '*' is Required Because it tells it is a  STRUCTURAL DIRECTIVE i.e it will change the Structure of the DOM 

    #2 -- ngStyle -- Helps us to Assign DYNAMIC STYLES, it Takes {} TSX object as Value

    #3 -- ngClass -- Helps us to Assign Dynamic Class, it Takes {} TSX object as Value

    #4 -- ngFor -- Display some Content Multiple Times with Index

    #5 -- <ng-content></ng-content>


# Difference Between Attribute  and Structural Directives 
      # [// ElementRef Gives us ACCESS to the element]
        [// TemplateRef Gives us ACCESS to the template ]

   # Attributes Directives -- They Sit on Elements just like Attributes. 
      8 it never destroys anything from the DOM, it only changes the Property of elements EX:- backgroundColor




   # Structural Directives -- They Sit on Elements just like Attributes, but they also change the structure of the DOM around this element. 
     # We cannot have More than one STRUCTURAL DIRECTIVE on an Element.

        * overall View Container is Affected.