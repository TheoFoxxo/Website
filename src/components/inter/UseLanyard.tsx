import { Config } from '@/utils/config';
import { useLanyardWS } from 'use-lanyard';// such a cool package

export default function UseLanyard() {
    const DISCORD_ID = "664017668629856266";
    const data = useLanyardWS(DISCORD_ID);

    let act = null;
    let icon;
    let pain = "";
    let dot;

<<<<<<< HEAD
<<<<<<< HEAD
    try {
        act = `${data?.activities[0].state}`
    } catch(e) {
        pain = `https://cdn.discordapp.com/emojis/798200221045620746.webp?size=28&quality=lossless`
        act = "I'm not doing anything."
        console.log(e)
    }
=======
>>>>>>> parent of 1a880d4 (i forgor)

=======
>>>>>>> parent of 4b6b3a8 (I'm gonna make everything a customization...for custmisation)
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
<<<<<<< HEAD
            act = "I'm Asleep"
<<<<<<< HEAD
            pain = `https://cdn.discordapp.com/emojis/854817372816015392.webp?size=28&quality=lossless`
=======
            act = "I'm Asleep 💤"
>>>>>>> parent of 4b6b3a8 (I'm gonna make everything a customization...for custmisation)
=======
>>>>>>> parent of 1a880d4 (i forgor)
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
    try {
        act = `${data?.activities[0].state}`
    } catch {
        pain = ``
    }
>>>>>>> parent of 4b6b3a8 (I'm gonna make everything a customization...for custmisation)
=======
    try {
        act = `${data?.activities[0].state}`
    } catch(e) {
        pain = `https://cdn.discordapp.com/emojis/854817372816015392.webp?size=28&quality=lossless`
    }
>>>>>>> parent of 1a880d4 (i forgor)

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
                <p> <img className='my-auto ml-3 inline rounded' src={pain} />{dot}{act}</p>
            </div>
        </div>
        </div>
    )
}