"use client";

import { useEffect, useState } from "react";
import IframeSourceLink from "@/components/IframeSourceLink";
import styles from "./page.module.css";

type Props = {
  serverNumber: string;
};

export default function LeftIframe({ serverNumber }: Props) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [hideLoading, setHideLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!loaded) setError(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, [loaded]);

  useEffect(() => {
    if (loaded) {
      const t = setTimeout(() => setHideLoading(true), 600);
      return () => clearTimeout(t);
    }
  }, [loaded]);

  return (
    <div className={styles.iframeWrapper}>
      {/* ⭐ iframe + ロード専用コンテナ */}
      <div className={styles.iframeContainer}>
        {!error && (
          <iframe
            src={`https://senka.su/world?num=${serverNumber}`}
            className={styles.iframe}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
          />
        )}

        {!hideLoading && !error && (
          <div
            className={`${styles.loading} ${
              loaded ? styles.loadingFadeOut : ""
            }`}
          >
            <div className={styles.spinner} />
            <p>読み込み中…</p>
          </div>
        )}

        {error && (
          <div className={styles.errorWrapper}>
            <img src="/error.png" alt="読み込み失敗" />
            <p className="text-sm text-gray-600">表示できませんでした</p>
          </div>
        )}
      </div>

      {/* ⭐ 出典は常に表示 */}
      <IframeSourceLink serverNumber={serverNumber} />
    </div>
  );
}
