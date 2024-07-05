import { auth } from '@clerk/nextjs/server'
import connect from '@/utilities/connect'
import { redirect } from 'next/navigation'

export default function Page() {
    const { userId } = auth()

    async function handleCreateUser(formData) {
        "use server"
        const db = connect()
        const data = Object.fromEntries(formData)
        const { username, bio, location } = data
        try {
            db.query(`INSERT INTO users (clerk_id, username, bio, location) 
        VALUES ($1, $2, $3, $4)`, [userId, username, bio, location])
            redirect("/")
        } catch (error) {

        }
    }


    return (
        <div>
            <form action={handleCreateUser}>
                <label htmlFor="username">username</label>
                <input name="username" placeholder="username" />


                <label htmlFor="bio">Tell Us About Yourself...</label>
                <input name="bio" placeholder="Tell me more...but not too much you only have 500 characters" />

                <label htmlFor="location">Location</label>
                <input name="location" palceholder="location" />

                <button>Submit</button>

            </form>
        </div>
    )
}