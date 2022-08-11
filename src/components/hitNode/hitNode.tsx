import s from './hitNode.module.scss';

interface HitProps {
    title: string;
    author: string;
    url: string;
}

export const HitNode = ({title, author, url}: HitProps) => {
    return (
        <div className={s.container}>
            <h1>{title}</h1>
            <div>{author}</div>
            <div>{url}</div>
        </div>
    );
}