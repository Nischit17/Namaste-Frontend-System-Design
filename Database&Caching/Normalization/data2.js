// Problem statement:

const state = {
  users: [
    {
      id: 1,
      name: "Alice",
      posts: [
        {
          id: 101,
          title: "Post 1",
          comments: [{ id: 201, text: "Comment 1" }],
        },
      ],
    },
    {
      id: 2,
      name: "Bob",
      posts: [
        {
          id: 102,
          title: "Post 2",
          comments: [{ id: 202, text: "Comment 2" }],
        },
      ],
    },
  ],
  tags: [
    { id: 301, name: "Tech", posts: [{ id: 101 }, { id: 102 }] },
    { id: 302, name: "Travel", posts: [{ id: 102 }] },
  ],
};
