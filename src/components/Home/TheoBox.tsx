import Image from "next/image";

import { Config } from '../../utils/config'
import { Buttons } from './Buttons'

export const TheoBox = () => {
    return (
        <div className='box'>
            <img src={Config.avatar} alt="ImCuteRight?" className="box-img" />
            <h1>{Config.name}</h1>
            <h5>{Config.hobby}</h5>
            <p>{Config.description}</p>
            <ul>
                <Buttons/>
            </ul>
        </div>
    )
}