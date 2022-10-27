import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto p-2 min-h-screen '>
           <div className='shadow-md mb-2 p-2' >
           <h2 className='text-2xl font-bold'>What is cors?</h2>
                     <p>Ans:Cross-Origin Resource Sharing   (CORS)    refers to
                     the method that allows you to make requests to the
                     server deployed at a different domain. As a reference,
                         if the frontend and backend
                         are at two different domains, we need CORS there.
                         Cross-origin resource sharing (CORS) is 
                      a browser security feature that restricts       cross-origin 
                     HTTP requests that are initiated from  scripts running
                      in the browser. If your REST API's resources receive
                      non-simple cross-origin
                          HTTP requests, you need to enable CORS support.</p>
           </div>
        <div className='shadow-sm mb-2 p-2'><h1 className='text-2xl font-bold'>Why are you using firebase?</h1>
                 <p>Firebase helps me develop high-quality 
                  apps, grow my user base..Firebase is great for quick projects:
                  it's easy to set up, fast, in many cases requires only front-end logic. 
                  It lets you focus on your app instead of implementing custom authentication,
                     web sockets or database connections.</p></div>


        <div className='shadow-sm mb-2 p-2'> <h1 className='text-2xl font-bold'>What does the privet route work?</h1>
                      <p>The react private 
                          route component renders child components
                      ( children ) if the user is logged in.
                     If not logged in the user is redirected to the /login 
                      page with the return url
                      passed in the location state property.</p></div>
            <div className='shadow-sm mb-2 p-2'>
            <h1 className='text-2xl font-bold'>What Is Node?</h1>
                    <p>Node is javascript run time....
             Node.js is an open source server environment; Node.js is free ; Node.js can generate dynamic page 
            content; Node.js can create, open, read, write, delete etc....
            Node allows developers to write JavaScript code that runs directly in a
                computer process itself instead of in a browser.</p>
            </div>
               <div className='shadow-sm mb-2 p-2'>
               <h1 className='text-2xl font-bold'>How does node work?</h1>
                       <p>Node.js is the JavaScript runtime environment which is based on Google's V8 Engine i.e.
                    with the help of Node.js we can run the JavaScript outside of the browser. Other things that 
                   you may or may not have read about Node.js is that
                   it is single-threaded, based on event-driven architecture,
                   and non-blocking based on the I/O model.
                  It is a used as backend service where javascript works
                   on the server-side of the application. This way javascript 
                   is used on both frontend and backend. Node. js runs on chrome v8 engine which converts
                        javascript code into machine code,
                    it is highly scalable, lightweight, fast, and data-intensive.</p>
               </div>

           
        </div>
    );
};

export default Blog;