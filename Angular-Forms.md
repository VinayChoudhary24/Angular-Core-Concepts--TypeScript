# FORMS -- forms are Handled by Angular and If we want to Submit the Form we need to Reach VIA http Request.
    
    * VALIDATION -- Allows us to Check if the Form is Valid

    * APPEARANCE -- Conditionally Change the Way it LOOKS.

# Angular Offers TWO Different Types of Approaches
    #1 TEMPLATE-Driven -- Angular infers the Form Object from the DOM.
        
        * ngModel && name="" -- will Help Angular to register/Detect the Input Field

        * mgSubmit="" -- Add ngSubmit to Bind the onSubmit Function i.e when Clicked on Submit Button.

        * #f="ngForm" -- will get the values entered by the user


    #2 REACTIVE --  Form is Created Programmatically and Synchronized with the DOM.