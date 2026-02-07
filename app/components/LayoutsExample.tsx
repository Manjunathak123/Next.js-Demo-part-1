/* Layout example.tsx:- A layout is a ui that is shared between multiple pages in your application.
-> For example Header and footer will exist on every page.

How to create Layouts:- default export  a React component from a layout.js or layout.tsx file that
 component takes a childern prop which next.js will populate with your page content.
 -> We no need to create layout file. next.js provides the layout file.
 -> every layout file will have a childern prop this where page.tsx file will call.
 -> we can check this by adding Header and footer.
-> below is the code for Layout.tsx 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header style={{backgroundColor:"lightblue", padding:"1rem"}}>
     <p>Header</p>
        </header>
        {children}
        <footer style={{backgroundColor:"ghostwhite", padding:"1rem"}}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}

*/