/* Link Component Example:- For client side navigation next.js gives us <Link> component.
-> The Link component is a React component that extends HTML <a> element and its the primary
 way to navigate between routes in Next.js to use we will need to import it from next/link.
-> See example in page.tsx file in app folder.
*/


import Link from "next/link";

export default function Home(){
  return(
    <>
    <h1>Welcome Home!!</h1>
    <Link href="/blog">Blog</Link>
    </>
  ) 
}