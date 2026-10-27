/*  Routing:-   
-> Next.js has a file system based routing system. 
-> URL’s you can access in your browser are determined by how you organize your files and folders in your code. 

Routing conventions:-  
-> All routes must live inside the app folder 
-> Route files must be named wither page.js or page.tsx 
-> Each folder represents a segment of the URL path. 
-> When these conventions are followed, the file automatically becomes available as a route. 

Example:- if you create page.tsx file in inside app folder then if we run https://localhost:3000 then output will be Welcome Home!! 

Page.tsx 
export default function Home(){ 

  return <h1>Welcome Home!!</h1>

  Example 2:- if you want to create two routes, one for about page (example:- https://localhost:3000/about) and 
  one more for profile page (Example https://localhost:3000/profile) then we need to create about folder inside app folder then create
  page.tsx file in this then for https://localhost:3000/about the about folder page.tsx file will execute no need of declaring routing.
  -> see example of about and profile folders.

Nested Routes:- 
-> For example if you want to create https://localhost:3000/blog, https://localhost:3000/blog/first and https://localhost:3000/second
this is example of nested routes to handle this we need to create bolg folder inside this first folder ann in this page.tsx file then 
https://localhost:3000/blog/first for this page.tsx file will render.

Dynamic Routes:- 
Example:- When user visits /products then they should see list of three products and if user visits /products/id they we should
see details of that specific product. for example if navigate to /products/1 then  product 1 details should display.
we will use square brackets to get dynamic value that is [productId]
-> see products folder.

Nested Dynamic Routes:- 
if you want to route like /products/1/reviews/1 then we will use nested dynamic routes. for this we have to create products folder
inside this [productId] and inside this review folder insdie this [reviewId].
-> for this see reviews folder inside products folder.

Catch all segments:- For example we are building  a documentation site for our project. this site has multiple features each
feture conatins several concepts that need documentation. each feature conatins 5 concepts like feature 1 
conatins concept 1, concept2 etc. example routes /docs/feature1/concept1, /docs/feature1/concept2, /docs/feature1/concept3 etc.
/docs/feature2/concept1, /docs/feature2/concept2 etc. all these routes we can handle with just one file using catch all segments.
[...slug] folder inside docs folder will matches any url with starting docs.
-> cath all segment will accepts all url segements and handles in a single file.

Note: File-based routing in Next.js is a replacement for React Router, not Route Handlers.
 In fact, Route Handlers are actually a part of Next.js's file-based routing system.
To understand how these pieces fit together, it helps to look at what they do:

1. File-Based Routing vs. React Router (The UI Replacements)

Both of these manage the user-facing pages and navigation of your application.
• React Router: You must install it manually and define your UI routes explicitly in code using components like
 <Route path="/about" element={<About />} />.
• Next.js File-Based Routing: You don't write routing configurations. The framework automatically maps your folder 
structure inside the app/ directory directly to URLs (e.g., creating app/about/page.tsx automatically
 creates the /about webpage).

2. What is a Route Handler? (The Backend Piece)

A Route Handler is not a routing library; it is a specific feature within Next.js file-based routing used to build
 custom request handlers for a given route (like building a REST API).
• Instead of serving a UI page using a page.tsx file, you create a route.ts file.
• Inside route.ts, you export standard backend functions like GET, POST, PUT, or DELETE to return JSON data, 
handle webhooks, or communicate with a database.

*/