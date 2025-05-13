
let result: unknown;

result = 1;
result = "hello";
result = false;
result = Symbol();
result = { name: "John" };
result = [1, 2, 3];

const total = (result as number[]).reduce((a: number, b: number) => a + b, 0);
console.log(total);

const fetchData = async (url: string): Promise<unknown> => {
  const response = await fetch(url);
  return response.json();
};

const showPosts = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  try {
    const posts = await fetchData(url);
    (posts as { userId: number; id: number; title: string; body: string;}[])
    .map(post => console.log(post.title));
  } catch(err) {
    console.log(err)
  }
};

showPosts();

