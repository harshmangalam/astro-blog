export default function ThemeToggler() {
  const handleToggle = () => {
    document.documentElement.classList.add("dark");
  };
  return <button onClick={handleToggle}>Toggle</button>;
}
