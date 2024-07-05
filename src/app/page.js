import Image from "next/image";
import connect from "@/utilities/connect";
import { LikeButon } from "@/utilities/LikeButton"


export default async function Home() {
  const db = connect()
  const posts = (await db.query(`SELECT posts.post_content, posts.created_at, users.username, posts.clerk_id
    FROM posts
    INNER JOIN 
    users
    ON posts.clerk_id = users.clerk_id`)).rows

  return (
    <div>
      <section className="m-1 rounded p-2 flex-auto bg-slate-200">
        <h3>Welcome to Talkify!</h3>
        <h3>Some might say Talkify is like all the other social media websites but with less functionality, and sometimes you have to smash that refresh button for the login option to load, but I like to think of it as minimalist!</h3>
      </section>
      <section>
        {posts.map((posts) => {
          return (
            <div className="m-1 rounded p-2 flex-auto bg-slate-200">
              <p><b>{posts.username}</b></p>
              <p>{posts.post_content}</p>
              <LikeButon />
            </div>
          )
        })}
      </section>
    </div >
  );
}