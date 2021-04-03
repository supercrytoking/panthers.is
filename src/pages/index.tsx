import Loader from '../components/Loader'
import MemberTile from '../components/MemberTile'
import Members from '../members.json'

export default function App() {
    return (
        <>
            {/* <Loader /> */}
            <div className="min-h-screen flex text-gray-400 font-mono" style={{ backgroundColor: '#454545' }}>
                <div className="m-auto p-6 py-24 max-w-7xl w-full space-y-8">
                    <div className="space-y-24">
                        <div className="space-y-4 max-w-lg mx-auto">
                            <div className="inline-block">
                                <div className="bg-gray-800 px-2 py-1 rounded flex flex-row items-center animate-pulse">
                                    <img src="https://hackforums.net/images/logo/logo-circuit-blue.gif" className="h-3 mr-1" alt="" />
                                    <span className="text-xs font-mono uppercase">official group</span>
                                </div>
                            </div>
                            <h1 className="font-serif font-bold text-6xl">Panthers</h1>
                            <div className=" border-l border-gray-400 pl-4  space-y-4">
                                <h2 className="text-2xl font-light">
                                    "Panthers is a community which revolves around helping each other, in fact the main concept behind the group is to allow each and every member to benefit from the group's knowledge and
                                    power, and this can only be achieved through the process of members supporting each other, which will only be beneficial for the entire community."
                                </h2>
                                <h3>- Zues, Panthers Leader</h3>
                            </div>
                            {/* <p className="mx-auto border border-gray-400 px-2 py-3 inline-block">Join the Panthers</p> */}
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            {Members.map((member, index) => (
                                <MemberTile key={index} member={member} />
                            ))}
                        </div>

                        <p className="text-center font-mono space-y-2">
                            <p>&copy; {new Date().getFullYear()} PANTHERS</p>
                            {/* <p className="text-xs">Designed and Develope</p> */}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
