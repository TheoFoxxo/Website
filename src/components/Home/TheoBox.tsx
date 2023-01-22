import Image from "next/image";

import { Config } from '../../utils/config'
import { Buttons } from './Buttons'

export const TheoBox = () => {
    return (
        <div className='box'>
            <img src='/Images/hero/1.png' alt="ImCuteRight?" className="box-img" />
            <h1>{Config.name}</h1>
            <h5>{Config.description}</h5>
            <p>{Config.hobby}</p>
            <ul>
                <Buttons/>
            </ul>
        </div>
    )
}