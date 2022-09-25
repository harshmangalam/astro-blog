export const socials = [
  {
    name: "Github",
    href: "https://github.com/harshmangalam",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/HarshMangalam6",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/harshmangalam/",
  },

  {
    name: "DEV Community",
    href: "https://dev.to/harshmangalam",
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/channel/UCUTSe282qBVlgn85zISbeLA",
  },
];

export default function Footer() {
  return (
    <footer class="max-w-6xl mx-auto py-8 px-4">
      <div class="flex flex-wrap gap-4">
        {socials.map((link) => (
          <a
            href={link.href}
            target="_blank"
            className="text-sm rounded-full border px-4 py-2"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
