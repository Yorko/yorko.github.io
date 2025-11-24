export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>
          Hi, I'm Yury Kashnitsky, a Machine Learning Scientist and NLP practitioner.
          I'm currently working at Google Cloud as a GenAI Field Solutions Architect.
        </p>
        <p>
          I'm also the creator and leader of mlcourse.ai, an open Machine Learning course.
        </p>
        <p>
          This blog is where I share my thoughts on machine learning, career development,
          programming, and other topics.
        </p>
      </div>
    </div>
  );
}
