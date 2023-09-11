import UserAvatar from "./UserAvatar";

export default function UserList({ list }) {
    return (
        <>
            <ul className="space-y-2 font-medium">
                {list.map((user, index) => (
                    <li key={index}>
                        <a
                            href="#"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <UserAvatar userName={user.userName} name={user.name}></UserAvatar>
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
}