import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type ClickCounts = Record<string, number>;

// 백엔드가 붙기 전까지 클릭 수를 로컬 JSON 파일에 저장한다.
// 서버리스 배포(Vercel 등)에서는 파일이 유지되지 않으므로 DB로 교체해야 한다.
const STORE_PATH = path.join(process.cwd(), "data", "clicks.json");

// 동시에 들어온 요청이 서로의 쓰기를 덮어쓰지 않도록 순서대로 처리한다.
let queue: Promise<unknown> = Promise.resolve();

export async function getClickCounts(): Promise<ClickCounts> {
  try {
    return JSON.parse(await readFile(STORE_PATH, "utf8")) as ClickCounts;
  } catch {
    return {};
  }
}

export function incrementClick(linkId: string): Promise<number> {
  const task = queue.then(async () => {
    const counts = await getClickCounts();
    counts[linkId] = (counts[linkId] ?? 0) + 1;
    await mkdir(path.dirname(STORE_PATH), { recursive: true });
    await writeFile(STORE_PATH, JSON.stringify(counts, null, 2));
    return counts[linkId];
  });
  queue = task.catch(() => {});
  return task;
}
