import { BlogPosts } from 'app/components/posts';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Joonyoung Hong
      </h1>
      <p className="mb-4">
        Hi there:D 👋 <br />
        I'm a frontend developer passionate about crafting sleek, user-friendly
        web experiences.
      </p>
      <div className="my-16">
        <p className="mb-4 font-bold">Posts</p>
        <BlogPosts />
      </div>
    </section>
  );
}
