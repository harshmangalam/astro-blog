export default function BlogPost() {
  return (
    <article className="border dark:border-gray-800 bg-white shadow dark:bg-gray-800 rounded-md">
      <img
        src="https://prisma-blog-ebon.vercel.app/blog/posts/indexes-and-prisma/meta-image-1.png"
        alt=""
        class="rounded-t-md w-full h-60"
      />
      <div class="px-4 py-4">
        <h3 className="text-xl font-medium">
          Improving Query Performance with Indexes using Prisma: Introduction
        </h3>

        <p class="mt-4 dark:text-gray-300">
          One strategy for improving the performance of your database queries is
          using indexes. This article covers the fundamentals of database
          indexes: what they are, how they work, and their cost and benefits.
        </p>

        <ul class="mt-6 flex flex-wrap gap-4">
          {[...new Array(3)].map((tag) => (
            <li class="text-sm px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md">Javascript {tag}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
