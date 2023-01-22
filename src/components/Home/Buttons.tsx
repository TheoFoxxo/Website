import { Config } from '../../utils/config'

export const Buttons = () => {
    return (
        <div className="Buttons">
        <li>
            <a href={Config.github}>
                <i className="fa fa-github-square" aria-hidden="true"></i>
            </a>
        </li>
        <li>
            <a href={Config.twitter}>
                <i className="fa fa-twitter-square" aria-hidden="true"></i>
            </a>
        </li>
        </div>
    )
}