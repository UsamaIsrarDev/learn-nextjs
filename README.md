L5-tailwind-starter                            ...continue from next13-page
In this project I covered these topics                  [sum up 25 Oct, 24]

-revision html and css
-intro tailwind css     (example aircraft), this is a framework  35% faster
-utility first css framework (pre-define classes)

-tailwind low level framework, more flexible
-bootstrap overview
-create a project npx create-next-app@latest tailwind-starter then use the tailwind css utility classes



===========================================================================










L4-next13-page                                ...continue from next13-blog 
In this project I covered these topics                 [sum up 25 Oct, 24]

-revision next.js { routing, optimization, rendering, data-fetching, deployment }

-create a project named next13-page
-editing the page
-create a new page or diractory in the app directory name about and inside this create a file page.tsx

-import Link from 'next/link';
-this will create a routing concepts in next.js

-import Image from 'next/image';

-routes groups     i.e (marketing)
-dynamic segments   [products]



===========================================================================










L3-next13-blog                     ...continue from next-dynamic-routing    
In this project I covered these topics               [sum up 24 Oct, 24]

panaverse git repo
-hello world
-routes
-linking
-route groups        => route groups use to organized content
-dynamic segments
-generating static params



============================================================================










L2-next-dynamic-route                  ...continue from next-pre-rendering  
In this project I covered these topics                  [sum up 20 Oct 24]

-Dynamics routes
In nextjs dynamics routes create with [id].js file in the pages directory
getStaticPaths

-api routes (only read)
-deploy our first project next-blog



============================================================================










L2-next-pre-rendering                         ...continue from next-start
In this project I covered these topics                 [sum up 19 Oct 24]

-revision next.js

-pre-rendering and data fetching

in nextjs there are two forms of pre-rendering
-static side generation
-server side rendering

there are two forms of static side generation
-static side generation with data 
-static side generation without data

-static side generation with data which will be use the next reserved function getStaticProps()

first we will create a directory called posts, and inside of this two markdown files named pre-rendering.md and another is ssg-ssr.md
then we will create another directory called lib, and inside of this

create a file called posts.js, inside of posts.js file we will create a function getSortedPostsData() which is get data from the file system so import fs and gray-matter for .md files can reads

import getSortedPostsData() function in the index.js / home file and use a reserved function called getStaticProps(), inside of this function we will call the getSortedPostsData() and return the props and use it to

the home page and a props.



===========================================================================










L1-next-start  
In this project I learn these topics,                [sum up Oct 18, 24]

-project setup
-editing the page
-navigate between pages

-Link component next/link
-Image component next/link
-Head component next/head

-Script component next/script
-css modules for component level .module.css
-css global for app level global.css

css global create a file _app.js only import global css in this file
create a top level directory components and create a component layout.js
styling tips