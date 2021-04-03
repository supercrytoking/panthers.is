import useSWR from 'swr'
import { CopyToClipboard } from 'react-copy-to-clipboard'

interface MemberTileProps {
    member: any
}

export default function MemberTile({ member }: MemberTileProps) {
    return (
        <div className="border border-gray-600 rounded p-6 shadow-lg hover:shadow space-y-4 transition ease-in-out duration-150">
            {/* <img
                src={`https://hackforums.net/uploads/avatars/avatar_${member.hf_uid}.gif`}
                onError={(event) => event.target.setAttribute('src', `https://hackforums.net/uploads/avatars/avatar_${member.hf_uid}.jpeg`)}
                alt=""
            /> */}
            <div className="flex flex-row items-centerz flex-wrap">
                <p className="text-2xl font-extrabold mr-4">{member.username}</p>
                <CopyToClipboard onCopy={() => alert(`${member.discord} copied to clipboard.`)} text={member.discord}>
                    <p className="group hover:underline font-mono bg-white bg-opacity-10 rounded px-2 py-1 text-xs flex flex-row items-center">
                        <i className="fab fa-discord mr-2" />
                        <p>{member.discord}</p>
                    </p>
                </CopyToClipboard>
            </div>
            <a
                className="rounded px-2 py-1 bg-white bg-opacity-10 block hover:underline flex flex-row items-center justify-center text-xs"
                target="_blank"
                rel="noreferrer"
                href={`https://hackforums.net/member.php?action=profile&uid=
                ${member.hf_uid}`}
            >
                <img src="/img/hf_icon.png" alt="HackForums Icon" className="h-3 mr-2" />
                <span>{member.username} on HackForums</span>
            </a>
        </div>
    )
}
