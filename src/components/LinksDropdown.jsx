import { Show, For } from "solid-js";
import { Portal } from "solid-js/web";
import { createSignal } from "solid-js";
import MenuIcon from "./icons/MenuIcon";

export default function LinksDropdown(props) {
  const [show, setShow] = createSignal(false);
  let cardRef;

  function handleClickOutside(event) {
    if (cardRef && !cardRef.contains(event.target)) {
      setShow(false);
    }
  }


  return (
    <div class="relative">
      <button onClick={() => setShow(true)}>
        <MenuIcon />
      </button>

      <Show when={show()}>
        <Portal>
          <div className="fixed inset-0" onClick={[handleClickOutside]}>
            <div
              className={`fixed top-16 right-4 w-40  shadow   bg-white rounded-md dark:bg-gray-800`}
              ref={cardRef}
            >
              <ul class="flex flex-col space-y-2 py-4 px-2">
                <For each={props.links}>
                  {(link) => (
                    <li>
                      <a class="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md px-4 py-2 block" href={link.href}>{link.name}</a>
                    </li>
                  )}
                </For>
              </ul>
            </div>
          </div>
        </Portal>
      </Show>
    </div>
  );
}
