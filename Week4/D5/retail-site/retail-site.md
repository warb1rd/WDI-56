Here's what the client wants:
Pages
The following pages:

~~.Home.~~

~~.Log In.~~

~~.Sign Up.~~

~~.Customer Profile.~~

~~.Men (this will show men's clothing).~~

~~.Women (this will show women's clothing).~~

~~.VIP (this will show special deals for VIP members, aka anyone logged in).~~

~~.Edit Profile.~~

~~.Contact.~~

~~Home
The home page should include a heading with the company's name.~~

~~Footer
The footer should list the name, address, and phone number of the store and should be seen on the bottom of every page~~

​	Note: make up an address and phone number

~~Log In~~
This page should have a form for customers to sign in, which should include fields for:

~~Email address~~

~~Password~~

~~Log in button~~

Note: this form doesn't need to do anything yet

~~Sign Up~~
This page should have a form for customers to sign up, which should include fields for:

~~Name~~

~~Email address~~

~~Password~~

~~Password confirmation~~

~~Checkbox to select whether they want to sign up for our newsletter~~

~~Sign up button~~

Note: this form doesn't need to do anything yet

~~Another note: use a partial for the actual form, so it can be used again in the Edit Profile page~~

~~Customer Profile~~
For now, this page should only include a link to the Edit Profile page

~~Edit Profile~~
This page should have a form where people can update their contact info, using the same form used in the Sign Up page

Men/Women
These pages should have:

~~A heading~~

A section each for tops, bottoms, and shoes, with a subheading for each, where I can see each item in the category for that gender that is in stock.

Each item listed should show:

~~Picture~~

~~Name~~

~~Description~~

~~Price~~

~~a Quantity field~~

~~an Add to Cart button~~

~~VIP~~
The VIP page should have:

~~A heading~~

One section that shows all of the tops, bottoms, and shoes that have special offers for VIPs, as long as they're in stock.
Each item listed should show:
Picture
Name
Description
Price calculated to reflect a 20% discount
a Quantity field
an Add to Cart button

~~Contact~~
This page should have:

~~A form with inputs for a name, email, and comment/question with a submit button~~

Note: this form doesn't need to do anything yet

~~The address and phone number listed~~

The hours listed, with an asterisk next to whichever day of the week it currently is

---
~~Nav Bar~~

A nav bar included on the top of every page that has links to the following pages:

Home
Log In
Sign Up
Men
Women
VIP
Customer Profile
Contact
BUT

~~I only want to be able to see the VIP link when the customer is logged in~~

~~I only want to see the Sign Up link when a customer isn't signed in~~

Note: for this exercise, indicate whether a customer is signed in manually in your controller. Hint: you can use a global variable, which would be in your Class, and formatted like this $user_logged_in = true to change the value in all of your methods at once: @user = $user_logged_in