"use client";
import styles from "./search.module.scss";
import { usePosts } from "../Context/PostsContext";
import { ISearch } from "@interfaces/Search";
import { consoleOnRender } from "@utils/sharedFncs";

export default function Search({ componentMessage, componentName = "AppSvg" }: ISearch) {
  consoleOnRender(componentMessage, componentName);

  let timeoutId: ReturnType<typeof setTimeout>;

  const context = usePosts();

  const search = (searchTerm: string) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => context.search(searchTerm), 300);
  };

  return (
    <div className={styles.searchContainer}>
      <input type="text" placeholder="Search..." onChange={(e) => search(e.target.value)} />
    </div>
  );
}
