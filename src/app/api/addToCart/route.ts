import { NextResponse } from 'next/server';
import { getCollection } from './../../../lib/db.js'

export async function POST(req: Request) {
  const body = await req.json(); 

  const collection = await getCollection('cart'); 
  const result = await collection.insertOne(body);

  return NextResponse.json({ success: result.acknowledged, id: result.insertedId });
}
