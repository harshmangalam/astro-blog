export default function BlogPost(props) {
  return (
    <a href={props.url}>
      <article className="border dark:border-gray-800 bg-white shadow dark:bg-gray-800 rounded-md">
        <img
          src={props.poster}
          alt=""
          class="rounded-t-md w-full h-60 aspect-video"
        />
        <div class="px-4 py-4">
          <h3 className="text-xl font-medium">{props.title}</h3>

          <ul class="mt-6 flex flex-wrap gap-4">
            {props?.tags?.split(",").map((tag) => (
              <li class="text-sm px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </a>
  );
}
