# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.
# Pseudo code:
# Input: number
# Output:string 
# Check if a number is even or odd and 
#Then print is even or odd 


def oddChecks(num)
    if num % 2 == 0
        p "#{num} is even"
    else
        p "#{num} is odd"
    end
end

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'
oddChecks(num1)
oddChecks(num2)
oddChecks(num3)
# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete
# Pseudo code: Input will be a string. Remove all vowels from string and return string as output
def noVowels(str)
    p str.delete "Aaiueo"    
end

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
noVowels(beatles_album1)
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
noVowels(beatles_album2)
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'
noVowels(beatles_album3)


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.
# Pseudo code:
# Input: string 
# Output: string that says its a palidrome or not...
#need to take into account casing 

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'
def palindrome(str)
    if str.downcase.reverse() == str.downcase
       p  "#{str} is a palidrome"
    else
       p  "#{str} is not a palidrome"
    end
end
palindrome(palindrome_tester1)
palindrome(palindrome_tester2)
palindrome(palindrome_tester3)