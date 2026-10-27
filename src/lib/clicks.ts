import { MongoClient } from "mongodb";

export type ClickCounts = Record<string, number>;

type ClickDoc = { _id: string; count: number };

// 개발 중 HMR로 모듈이 다시 로드돼도 연결을 하나만 유지하도록 전역에 보관한다.
const globalForMongo = globalThis as unknown as { mongoClient?: Promise<MongoClient> };

function getClient(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI 환경 변수가 설정되지 않았어요.");
  globalForMongo.mongoClient ??= new MongoClient(uri).connect();
  return globalForMongo.mongoClient;
}

async function clicksCollection() {
  // 연결 문자열에 DB 이름이 없으면 "linknamu" DB를 쓴다.
  return (await getClient()).db(process.env.MONGODB_DB ?? "linknamu").collection<ClickDoc>("clicks");
}

export async function getClickCounts(): Promise<ClickCounts> {
  const docs = await (await clicksCollection()).find().toArray();
  return Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));
}

export async function incrementClick(linkId: string): Promise<number> {
  // $inc + upsert는 원자적이라 동시에 클릭이 들어와도 누락되지 않는다.
  const doc = await (await clicksCollection()).findOneAndUpdate(
    { _id: linkId },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );
  return doc?.count ?? 1;
}
