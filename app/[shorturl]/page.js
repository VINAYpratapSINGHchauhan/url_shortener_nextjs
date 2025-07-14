import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"
export default async function Page({ params }) {
    const { shorturl } = await params
    const client = await clientPromise;
    const db = client.db("Bitlinks")
    const collection = db.collection("url")

    // check if the short url exist
    const doc = await collection.findOne({ shorturl: shorturl})
    if (doc) {
        redirect(doc.url)
    }
    else{
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }

    return <div>My Post: {shorturl}</div>
}