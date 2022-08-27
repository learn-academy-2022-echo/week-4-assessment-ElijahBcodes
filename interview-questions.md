# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?


Your answer: In object oriented programing we are using classes and instances of classes to gather and assimilate data. In this way we can create functions and implement them without having to affect other parts of large software systems. Another key idea of OOP is that everything is looked at like an object. Functions are stored in classes and not by themselves as in functional programing. In functional programing we are just using functions within a local scope and they cannot be used globally. 

Researched answer:OOP is used in Ruby. FP is used in React. In OOP functions are stored in objects and are referred to as methods of an object. In FP functions can be stored in high order functions and called methods. It is an older style and is is baked into JS. There is some debate over which one to us depending on what you are trying to achieve. 

2. What is the difference between a Float and an Integer in Ruby?

Your answer:In ruby a float is a number like 1.001 and an integer is a number like 1.
While using the Ruby language this is important to note because it treats floats like an integer. for example a number like 5.9 will just come back as 5 and a number like 1.1 will come back as 1.

Researched answer: Integers are not very accurate. My description was a little off. If you are expecting a non whole number you should always use floats. If there is no float in the equation the value will be rounded down to the nearest whole number. 

3. Ruby has an implicit return. What does that mean?

Your answer: In Ruby the implicit return means that we don't need to use the word return. It is implicit and just needs a p or print statement. While we don't need the return we still need to invoke the object so that function can print. Nothing else is needed but the name of the object that has the function. 

Researched answer: In ruby the last line of code of a function will return and you can have a return but it is not necessary.

4. What is a block in Ruby? 

Your answer: In Ruby a block is a single line of code. It is important to note because indentation is more important and parenthesis are not needed for many things like functions or methods. If your code can be written on a single line it can be a ruby block encapsulated by curly braces.

Researched answer: It is not a single line of code. It is actually an anonymous function assigned to an object. In Ruby the code between the do and the end are a block. 

5. What is an instance variable in Ruby?

Your answer: An instance variable in Ruby is any object created from a class. 

Researched answer: In Ruby an instance variable has a @... If you are adding attributes to an object then those are also instance variables. Many objects can be created from one class with different values for their instance variables. 

## Looking Ahead: Terms for Next Week

1. PostgreSQL: Open source, created at UC Berkely Comp Science. Used for data storage. 

2. Ruby on Rails: It is library aka framework used for the Ruby programming language to make web apps. 

3. ORM:Object relational mapping. A method that allows converting data in-between incompatible systems using OOP languages. 

4. Active Record: In rails this can use data stored in a table and lets you engage with the data like an object in Ruby 

5. Migrations: Use SQL. Used to change and manipulate databases. 
