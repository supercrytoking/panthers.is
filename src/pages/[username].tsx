import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import Members from '../members.json'

export default function HackForumsForwarderPage() {
    const router = useRouter()

    useEffect(() => {
        if (!router) return

        const { username } = router.query
        const find = Members.find((member) => `${member.username}`.toLowerCase() === `${username}`.toLowerCase())

        window.location.href = find ? `https://hackforums.net/member.php?action=profile&uid=${find.hf_uid}` : '/'
    }, [router])

    return null
}
