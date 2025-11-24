import Image from "next/image";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { format } from "date-fns";

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Yury Kashnitsky
        </h1>
        <p className="text-xl text-muted-foreground max-w-[700px]">
          Machine Learning Scientist, NLP practitioner, and leader of mlcourse.ai.
          Sharing thoughts on ML, career, and programming.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tighter">Latest Posts</h2>
        <div className="grid gap-6">
          {allPostsData.map(({ slug, date, title, excerpt, image }) => (
            <article key={slug} className="group relative flex flex-col md:flex-row gap-6 space-y-2 md:space-y-0">
              {image && (
                <div className="relative w-full md:w-48 h-48 md:h-32 flex-shrink-0 overflow-hidden rounded-md border border-border">
                  <Image
                    src={typeof image === 'string' && image.startsWith('/') ? image : `/images/${image}`}
                    alt={title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-col justify-center space-y-2">
                <h3 className="text-xl font-bold">
                  <Link href={`/posts/${slug}`} className="hover:underline">
                    {title}
                  </Link>
                </h3>
                {excerpt && (
                  <p className="text-muted-foreground line-clamp-2">{excerpt}</p>
                )}
                <div className="flex items-center text-sm text-muted-foreground">
                  <time dateTime={date}>{format(new Date(date), "MMMM d, yyyy")}</time>
                </div>
              </div>
            </article>
          ))}
          {allPostsData.length === 0 && (
            <p className="text-muted-foreground">No posts found. Check back later!</p>
          )}
        </div>
      </section>
    </div>
  );
}
