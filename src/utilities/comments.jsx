import connect from "@/utilities/connect"
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export function AddPosts() {

    const { userId } = auth()
    async function handleAddcomment(formData) {
        "use server"
        //{ post_content, clerk_id}
        const post_content = formData.get("post_content")

        console.log(post_content)

        const db = connect()
        db.query('INSERT INTO posts (post_content, clerk_id) VALUES ($1, $2)', [post_content, userId])
        console.log(post_content)
        redirect(`/users/user-profile/${userId}`)
    }

    return (
        <div>
            <form action={handleAddcomment}>
                <label htmlFor="Comment">Comment: </label><p></p>
                <input placeholder=" Thoughts..." name="post_content" id="post_content" className="rounded"></input><p></p>

                <button type="submit" className="m-1 rounded p-2 flex-auto   bg-slate-700">Submit</button>
            </form>
        </div>
    )
}
