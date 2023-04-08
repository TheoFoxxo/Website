import { Config } from '../../utils/config'

interface Iprops {
    //** don't add https:// */
    linkFuck: any;
    //** fa icon */
    faIcon: any;
}


export default function Buttons({ linkFuck,faIcon }: Iprops) {
    return (
            <li>
                <a href={`https://${linkFuck}`}>
                    <i className={faIcon} aria-hidden="true"></i>
                </a>
            </li>
    )
}