"use client"

import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

const Countdown = ({ count }: { count: number }) => {
    const countValue = useMotionValue(0)
    const rounded = useTransform(() => Math.round(countValue.get()))

    useEffect(() => {
        const controls = animate(countValue, Number(count), { duration: 5 })
        return () => controls.stop()
    }, [count, countValue])

    return <motion.pre style={text}>{rounded}</motion.pre>
}



const text = {
    fontSize: 64,
    color: "var(--primary)",
}

export default Countdown