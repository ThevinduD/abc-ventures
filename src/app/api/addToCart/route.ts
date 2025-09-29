import { NextResponse } from 'next/server';
import { getCollection } from './../../../lib/db.js'

export async function POST(req: Request) {
  const body = await req.json(); // this will have img, name, price

  const collection = await getCollection('cart'); // your MongoDB cart collection
  const result = await collection.insertOne(body);

  return NextResponse.json({ success: result.acknowledged, id: result.insertedId });
}
