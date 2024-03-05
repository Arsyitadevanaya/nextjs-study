import Link from "next/link"
export default function Menu() {
    return (
        <div>
            {/* <a href="/">Home</a> */}
            <ul className="flex content-between m-5">
                <li className="mr-5"><Link href="/">Home</Link></li>
                <li className="mr-5"><Link href="/profile">Profile</Link></li>
                <li className="mr-5"><Link href="/users">Users</Link></li>
                <li className="mr-5"><Link href="/users/detail">User Detail</Link></li>
                <li className="mr-5"><Link href="/notes">Notes</Link></li>
            </ul>
        </div>
    )
}