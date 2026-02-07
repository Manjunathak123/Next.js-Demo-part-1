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

*/