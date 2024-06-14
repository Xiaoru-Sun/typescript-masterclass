//------------
// interfaces
//------------

interface Author {
  name: string;
  avatar: string;
}

const authorOne: Author = { name: "mario", avatar: "/img/mario.png" };
const authorTwo: Author = { name: "lily", avatar: "/img/lily.png" };

interface Post {
  title: string;
  body: string;
  tags: string[];
  created_at: Date;
  author: Author;
}

// newPost object does not have to be typed
const newPost: Post = {
  title: "my first post",
  body: "something interesting",
  tags: ["gaming", "tech"],
  created_at: new Date(),
  author: authorOne,
};

//----------------------------
// as function argument types
//----------------------------

function createPost(post: Post): void {
  console.log(`created post ${post.title} by ${post.author.name}`);
}

// createPost({ title: 'a new post title' })
createPost(newPost);

//-------------
// with arrays
//-------------

let posts: Post[] = [];
console.log("posts", posts);

// posts.push({ title: 'some title' })
posts.push(newPost);

// more example
interface Shape {
  name: string;
  color: string;
  area(): number;
}

function calculateArea(shape: Shape): void {
  console.log(`calculating area of ${shape.name}`);
  console.log(`Area:${shape.area()}`);
}
const circle: Shape = {
  name: "Circle",
  color: "Red",
  area() {
    return Math.PI * 2 * 2;
  },
};

calculateArea(circle);
