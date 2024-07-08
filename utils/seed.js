const users = [
  {
    username: "john_doe",
    email: "john@example.com",
    password: "password123",
    thoughts: [
      {
        title: "My first thought",
        content: "Hello world!",
        reactions: [
          {
            username: "jane_smith",
            content: "Nice thought!"
          },
        ]
      },
      {
        title: "Another thought",
        content: "Lorem ipsum dolor sit amet.",
        reactions: [
          {
            username: "jane_smith",
            content: "I agree!"
          }
        ]
      }
    ]
  },
  {
    username: "jane_smith",
    email: "jane@example.com",
    password: "password456",
    thoughts: [
      {
        title: "Hello world",
        content: "This is my first thought!",
        reactions: [
          {
            username: "john_doe",
            content: "Nice thought!"
          }
        ]
      }
    ]
  },
  {
    username: "alice",
    email: "alice@example.com",
    password: "password789",
    thoughts: [
      {
        title: "Thought by Alice",
        content: "This is Alice's thought!",
        reactions: [
          {
            username: "john_doe",
            content: "Interesting!"
          }
        ]
      }
    ]
  },
  {
    username: "bob",
    email: "bob@example.com",
    password: "passwordabc",
    thoughts: [
      {
        title: "Thought by Bob",
        content: "This is Bob's thought!",
        reactions: [
          {
            username: "jane_smith",
            content: "I like it!"
          }
        ]
      }
    ]
  },
  {
    username: "emma",
    email: "emma@example.com",
    password: "passworddef",
    thoughts: [
      {
        title: "Thought by Emma",
        content: "This is Emma's thought!",
        reactions: [
          {
            username: "john_doe",
            content: "Interesting!"
          }
        ]
      }
    ]
  }
];

module.exports = users;