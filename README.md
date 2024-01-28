<img width="241" alt="Screenshot 2024-01-28 140333" src="https://github.com/Swasti008/Quiz-CA-4-FEWD/assets/144793835/cea3e9da-c162-49f6-9660-a2d9f213e778">

# BRAINBUSTER - QUIZ REACT APP

## Screenshots of the Output

<img width="1279" alt="Screenshot 2024-01-28 160421" src="https://github.com/Swasti008/Quiz-CA-4-FEWD/assets/144793835/ff7a59c6-b7e5-4e33-a8b8-2067dc101e8b">
<img width="1280" alt="Screenshot 2024-01-28 160445" src="https://github.com/Swasti008/Quiz-CA-4-FEWD/assets/144793835/ab4ec9af-1f44-461c-80d6-f66d70441486">
<img width="1280" alt="Screenshot 2024-01-28 160508" src="https://github.com/Swasti008/Quiz-CA-4-FEWD/assets/144793835/d28648bf-9eac-4daa-805c-01caee61c0ad">
<img width="1280" alt="Screenshot 2024-01-28 160538" src="https://github.com/Swasti008/Quiz-CA-4-FEWD/assets/144793835/e139c808-e056-4fb9-89d0-cdb811870afd">
<img width="1280" alt="Screenshot 2024-01-28 160608" src="https://github.com/Swasti008/Quiz-CA-4-FEWD/assets/144793835/c21a2989-bf67-4b07-bf9e-ee8a1f4743c1">

### Project Deploy Link:- https://amazing-alpaca-45b415.netlify.app/


![Logo-nav](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)

### CA - 4: More Quiz


### Part 1:
You are asked to create a quiz app using functional components (have to use `hooks` for state-management).
There are few functionalities - that you need to achieve ->

1. An option through which one can toggle between `dark` and `light` mode.
2. Once you answer a particular question -> you should be able to move to the next question automatically - until you reach the last question. (You cannot attempt a question twice -> so no need for a functionality which can lead you back to the previous question.)
3. Once you answer the final question -> a result screen should pop-up --> displaying your result.

#### Steps to follow:

1. The structure of the project is already provided to you. You just need to clone this repository and run the following command: `npm i` or `npm install`.
2. The set of questions is also provided to you inside `questions.js` file. 
   **NOTE:** Inside `questions.js` -> there are total of 5 questions, out of which only the first question is complete. You need to complete the other questions by filling-in the values for `isCorrect` field.
3. There are two functional components: 
   1. QuestionBox.js -> you have to implement the following features inside this component:
       1. `Question: 2 out of 5` ( if you are at the first question -> where 2 is coming from your current question number, and 5 is coming from the total number of questions.)
       2. Question description
       3. 4 Options for the above question

    You can take the below picture as reference:

    ![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/ca-4-react-quiz.png)

  2. Result.js -> Once the user have attempted all the questions, he/she should get his/her score in percentage.
     You can take the below picture as reference:

     ![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/ca-4-react-final.png)

**NOTE:** when you click on the button which changes toggles between dark and light mode -> the inner text of the button should also change -> ie: if the background is `dark` -> then `light` should be written on the button, else the vice-versa. You can see all the required functionalities working in the below given gif:

#### Demo:

![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/ca-4-react-quiz-section-one.gif)

### Part2: More to come:

Once all the above mentioned functionalities are achieved -> then create two buttons named as 
1. Highlight: which upon clicking should highlight the `question text` -> by highlight we mean that -> the color of the question text should change to `red`.
2. Remove Highlight: which upon clicking should remove the red color and go back to the color which was used earlier -> in the above eg case -> the color should come back to dark blue color.

You can see the working demo below in the gif:

![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/ca-4-react-quiz-section.gif)

Happy Coding ❤️!
