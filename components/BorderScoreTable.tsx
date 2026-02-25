"use client";
import styles from "./page.module.css";
import { useMemo, useState } from "react";
import type { BorderScore } from "@/types/borderscore";

type Props = {
  data: BorderScore[];
  defaultMonth: string;
};

export default function BorderScoreTable({ data, defaultMonth }: Props) {
  const [year, setYear] = useState<string>("all");
  const [month, setMonth] = useState<string>(defaultMonth);

  const years = useMemo(() => {
    const set = new Set(data.map((d) => d.year.year));
    return Array.from(set).sort((a, b) => Number(b) - Number(a));
  }, [data]);

  const months = useMemo(() => {
    const filtered =
      year === "all" ? data : data.filter((d) => d.year.year === year);

    const set = new Set(filtered.map((d) => d.month.month));

    return Array.from(set).sort(
      (a, b) => Number(b.replace("月", "")) - Number(a.replace("月", "")),
    );
  }, [data, year]);

  const filteredData = useMemo(() => {
    return data.filter((d) => {
      if (year !== "all" && d.year.year !== year) return false;
      if (month !== "all" && d.month.month !== month) return false;
      return true;
    });
  }, [data, year, month]);

  return (
    <>
      {/* フィルタ */}
      <div className="flex gap-4 mb-4">
        <select
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
            setMonth("all");
          }}
          className="border p-2"
        >
          <option value="all">全ての年</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}年
            </option>
          ))}
        </select>

        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="border p-2"
        >
          <option value="all">全ての月</option>
          {months.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      {/* ⭐ テーブル */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>年月</th>
            <th>聯合艦隊基幹艦隊</th>
            <th>主力艦隊第一群</th>
            <th>主力艦隊第二群</th>
            <th>主力艦隊第三群</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>
                {item.year.year} / {item.month.month}
              </td>
              <td>{item["border-TOP"]}</td>
              <td>{item["border-1"]}</td>
              <td>{item["border-2"]}</td>
              <td>{item["border-3"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
