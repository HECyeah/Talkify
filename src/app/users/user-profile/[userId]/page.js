import connect from "@/utilities/connect"
import { AddPosts } from "@/utilities/comments"
import { auth } from '@clerk/nextjs/server'






export default async function page({ params }) {


    const db = connect()

    const userInfo = (await db.query(`Select * from users where clerk_id=$1`, [params.userId])).rows[0]
    const posts = (await db.query(`Select * from posts where clerk_id=$1`, [params.userId])).rows



    return (
        <div>
            <section className="m-1 rounded p-2 flex-auto bg-slate-200">
                <h2>Username: <b>{userInfo.username}</b></h2>
                <p>Bio: <b>{userInfo.bio}</b></p>
            </section>
            <section className="m-1 rounded p-2 flex-auto bg-slate-200">
                <AddPosts />
            </section>
            <section>
                {posts.map((posts) => {
                    return (
                        <div className="m-1 rounded p-2 flex-auto bg-slate-200">
                            <p>{posts.post_content}</p>
                        </div>
                    )
                })}
            </section>
        </div>

    )


}