import { useLanyardWS } from 'use-lanyard';// such a cool package

export default function UseLanyard() {
    const DISCORD_ID = '664017668629856266';
    const data = useLanyardWS(DISCORD_ID);

    let act = null;
    let icon;
    let pain = "";
    let dot;

    try {
        if (!data?.activities[0].emoji?.animated === true) {
            pain = `https://cdn.discordapp.com/emojis/${data?.activities[0].emoji?.id}.png?size=28&quality=lossless`
        } else {
            pain = `https://cdn.discordapp.com/emojis/${data?.activities[0].emoji?.id}.gif?size=28&quality=lossless`
        }
    } catch (error) {
        console.log(error)
    }

    switch (data?.discord_status) {
        case "offline":
            icon = `rounded absolute w-3 h-3 bg-gray-400`
            act = "I'm Asleep 💤"
            break;
        case "dnd":
            icon = `absolute w-3 h-3 bg-red-400 rounded`
            break;
        case "online":
            icon = `absolute w-3 h-3 bg-green-400 rounded`
            break;
        case "idle":
            icon = `absolute w-3 h-3 bg-yellow-400 rounded`
            break;
    }
    try {
        act = `${data?.activities[0].state}`
    } catch {
        pain = ``
    }

    if (!data?.listening_to_spotify){
        dot =" • ";
    } else {
        act = `Listening to: ${data?.spotify?.song}`
        dot = "";
        pain = ``;
    }

    return (
        <div className='grid place-items-center'>
        <div className="absolute rounded-md p-4 w-[20em] text-center border-gray bg-[#282828] border-dotted border flex">
            <img src={`https://cdn.discordapp.com/avatars/${DISCORD_ID}/${data?.discord_user.avatar}.webp`} className="rounded-lg w-[100px] border-gray border-dotted border" />
            <div className="my-auto ml-3">
                <p className="text-lg flex">
                    {data?.discord_user.username}{"#"}{data?.discord_user.discriminator}
                    <span className="pt-2 rounded ml-2 font-bold  animate-pulse"><span className={icon} /></span>
                </p>
                <p> <img className='my-auto ml-3 inline' src={pain} />{dot}{act}</p>
            </div>
        </div>
        </div>
    )
}