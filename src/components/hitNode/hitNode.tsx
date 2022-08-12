import s from './hitNode.module.scss';
import { HitObject } from '../../interfaces';
import { title } from 'process';
import { NumericLiteral } from 'typescript/lib/tsserverlibrary';

interface HitNodeProps {
    hitData: HitObject;
    key: string;
}

export const HitNode = (props: HitNodeProps) => {

    const {title, author, url} = props.hitData;

    return (
        <div className={s.container}>
            <h1>{title}</h1>
            <div>{author}</div>
            <div>{url}</div>
        </div>
    );
}