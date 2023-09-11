export default function UserAvatar({userName, name="none"}) {
    return (<>
        <div className="flex items-center space-x-4">
            <img 
                className="w-10 h-10 rounded-full" 
                src={`https://unavatar.io/${userName}`}
                alt="" />
            <div className="font-medium dark:text-white">
                <div>{name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
            </div>
        </div>
    </>);
}