"use client";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { useState } from "react";

export function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [{ cache, flush }] = useState(() => {
    const cache = createCache({ key: "mui" });
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    const hasEmotion = names.length > 0;
    const styles = names
      .map((name) => {
        const tag = cache.inserted[name];
        if (!tag) return "";
        return `<style data-emotion="${cache.key}-${name}">${tag}</style>`;
      })
      .join("");
    if (hasEmotion) {
      return (
        <style
          data-emotion={`${cache.key} global`}
          dangerouslySetInnerHTML={{ __html: styles }}
        />
      );
    }
    return null;
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
