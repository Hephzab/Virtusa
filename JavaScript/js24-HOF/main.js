// A higher order function is a function that does atleast one of the following:
//Takes one or more functions as an argument/parameter
//Returns a function as the result

import { posts } from "./posts.js";

//forEach
posts.forEach(post => {
    console.log(post);
});
console.clear();

//filter
const filterPosts = posts.filter(post => {
    return post.userId === 1;
});
console.log(filterPosts);

//map
const mappedPosts = filterPosts.map(post => {
    return post.id * 10;
});
console.log(mappedPosts);

//reduce
const reducedPostsValue = mappedPosts.reduce((sum,post) => {
    return sum+post;
});
console.log(reducedPostsValue);