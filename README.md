L1-next-start : In this project I learn these topics,    [Sumup Oct 18, 24]

project setup
editing the page
navigate between pages

Link component next/link
Image component next/link
Head component next/head

Script component next/script
css modules for component level .module.css
css global for app level global.css

css global create a file _app.js only import global css in this file
create a top level directory components and create a component layout.js
styling tips






L2-next-pre-rendering : ...this will continue from the next-start

In this project I covered these topics          [sumup 19 Oct 24]

pre-rendering and data fetching

in nextjs there are two forms of pre-rendering
static side generation
server side rendering

there are two forms of statuc side generation
static side generation with data 
static side generation without data

static side generation with data which will be use the next reserved function getStaticProps()

first we will create a directory called posts, and inside of this two markdown files named pre-rendering.md and another is ssg-ssr.md
then we will create another directory called lib, and inside of this

create a file called posts.js, inside of posts.js file we will create a function getSortedPostsData() which is get data from the file system so import fs and gray-matter for .md files can reads

import getSortedPostsData() function in the index.js / home file and use a reserved function called getStaticProps(), inside of this function we will call the getSortedPostsData() and return the props and use it to

the home page and a props.






L3-next-dynamic-route : ...this will continue from the next-pre-rendering

In this project I covered these topics          [sumup 20 Oct 24]

Dynamics routes
In nextjs dynamics routes create with [id].js file in the pages directory
getStaticPaths

api routes (only read)
deploy our first project next-blog






L4-next13-blog : ...this will continue from the next-dynamic-routing

In this project I covered these topics          [sumup 24 Oct, 24]



panaverse git repo
hello world
routes
linking
route groups        => route groups use to organized content
dynamic segments
generating static params