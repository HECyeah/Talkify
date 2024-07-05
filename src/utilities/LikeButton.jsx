'use client'
import { motion } from "framer-motion"
import { useState } from "react"

export function LikeButon() {
    const [like, setLike] = useState(0)

    return (
        <div>
            <motion.button
                whileHover={{ scale: 1.2 }}
                onClick={() => { setLike(like + 1) }}>
                {`❤️ ${like}`}
            </motion.button>
        </div>
    )
}