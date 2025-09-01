## Next.js Class 1 - Introduction

- Welcome to today’s class; we will start the session.
- Welcome to the first class of the second quarter.
- Focus for this quarter: 2D User Interface (UI) development.
- Additionally, we will cover 3D development in the fourth quarter of the program.

### Course Overview

- Introductory class: Discuss what topics will be covered in the third quarter.
- Addressing a common question: Why haven’t we covered web topics yet?
- We are not replacing existing technology; we will integrate with it.
- Existing technology (currently secret) will be combined with new concepts.

### 2D Interfaces and Cloud

- Many interfaces will be 2D.
- Blockchain is expensive; most data will be stored on the cloud.
- Cloud allows cost-efficient application running without going into details yet.

### Target Areas in the Program

- Cloud computing (including serverless).
- Blockchain (platform work).
- 3D development concepts will be introduced alongside blockchain.

### Software Development Life Cycle

- Life cycle includes requirement, development, testing, and execution planning.
- Focus: preparing students for software developer roles.
- Software applications can be updated regularly (e.g., games and apps).

### Learning Latest Technology

- Developers need to learn the latest technologies to work on new products.
- Course tracks the best technologies adopted widely by companies.
- Market adoption and industry relevance determine technology choice.

### Library vs Framework

- Previous class: difference between libraries and frameworks.
- Library + Framework = Combined usage for effective application building.
- Next.js (framework) + React (library) can be combined to quickly build applications.

#### In this project I learn these topics;

- project setup
- editing the page
- navigate between pages

- Link component next/link
- Image component next/link
- Head component next/head

- Script component next/script
- css modules for component level .module.css
- css global for app level global.css

- css global create a file _app.js inside pages or app directory only import global css in this file
- components : create a top level directory components and create a component layout.js
- styling tips












===========================================================================


That’s it for the first lesson. Including these projects.
next-start , next-pre-rendering , next-dynamic-routes , nextjs-lighthouse , next13-blog , next13-page , tailwind-starter.


===========================================================================










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










