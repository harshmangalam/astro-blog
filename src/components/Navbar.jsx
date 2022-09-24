import { For } from "solid-js";
import ThemeToggler from "./ThemeToggler";
export default function Navbar() {
  return (
    <nav class="max-w-6xl w-full mx-auto flex justify-between items-center h-24">
      <div>
        <a href="/" class="text-2xl font-semibold">
          <h1>H.Mangalam</h1>
        </a>
      </div>

      <ul class="flex items-center space-x-4">
        <For each={links}>
          {(link) => (
            <li>
              <a
                className="font-medium px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md text-lg text-gray-600 dark:text-gray-400"
                href={link.href}
              >
                {link.name}
              </a>
            </li>
          )}
        </For>
      </ul>
      <div>
        <ThemeToggler />
      </div>
    </nav>
  );
}

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Snippets",
    href: "/blog",
  },
  {
    name: "About",
    href: "/about",
  },
];
