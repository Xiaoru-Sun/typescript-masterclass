"use strict";
//------------
// interfaces
//------------
const authorOne = { name: "mario", avatar: "/img/mario.png" };
const authorTwo = { name: "lily", avatar: "/img/lily.png" };
// newPost object does not have to be typed
const newPost = {
    title: "my first post",
    body: "something interesting",
    tags: ["gaming", "tech"],
    created_at: new Date(),
    author: authorOne,
};
//----------------------------
// as function argument types
//----------------------------
function createPost(post) {
    console.log(`created post ${post.title} by ${post.author.name}`);
}
// createPost({ title: 'a new post title' })
createPost(newPost);
//-------------
// with arrays
//-------------
let posts = [];
console.log("posts", posts);
// posts.push({ title: 'some title' })
posts.push(newPost);
function calculateArea(shape) {
    console.log(`calculating area of ${shape.name}`);
    console.log(`Area:${shape.area()}`);
}
const circle = {
    name: "Circle",
    color: "Red",
    area() {
        return Math.PI * 2 * 2;
    },
};
calculateArea(circle);
