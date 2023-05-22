An app to deep dive into React redux and redux toolkit. Required knowldge: React, React Redux, Redux Toolkit, React Router, JSX, JavaScript ES 6 +, React Router, Redux best practices, familiarity with Redux toolkit, React browser extension and Redux browser extension.

### React Router

React Router enables "client side routing".

In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.

Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.

This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation.

### Pages/Storyboard

On the '/topics/new' page:

- Users can create topics

On the '/topics' page:

- Users can view all topics
- Users can click on an individual topic and be redirected to the page for that topic

On the /topics/:topicId page:

- Users can view an individual topic and all quizzes for that topic
- Users can click on a quiz associated with a topic and be redirected to that quiz’s page

On the 'quizzes/new' page:

- Users can create quizzes that are associated with topics and contain lists of flashcards
- Users can add and remove card fields in the new quiz form

On the '/quizzes' page:

- Users can view all quizzes
- Users can click on an individual quiz and be redirected to that quiz’s page

On the '/quizzes/:quizId' page:

- Users can view an individual quiz and flip cards over

# State

The app's state is totally normalized, with slices for topics, quizzes, and cards.

# Routes

- `/topic/new` – form to create a new topic
- `/topics` – index of all topics
- `/topics/:topicId` – page for an individual topic
- `/quizzes/new` – form to create a new quiz
- `/quizzes` – index of all quizzes
- `/quizzes/:quizId` – page for an individual quiz

# Slices

Slice 1: Topics
Slice 2: Quizzes
Slice 3: Cards

# To Run

Run `npm start` in the project root and the app will be available on port 3000.

# To Test

1. Create topics
2. Create quizzes
3. Visit the page for an individual quiz and flip the cards over
