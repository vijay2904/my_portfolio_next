import { JSX } from 'react';
import { highlight} from 'sugar-high';

import Counter from '@/components/counter';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Code({ children, ...props } : any) {
    const codeHTML = highlight(children);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
    children: string;
}

interface Components {
    code: React.FC<CodeProps>;
    Counter: typeof Counter;
    h1: React.FC<React.HTMLAttributes<HTMLHeadingElement>>;
    h2: React.FC<React.HTMLAttributes<HTMLHeadingElement>>;
    ol: React.FC<React.OlHTMLAttributes<HTMLOListElement>>;
    ul: React.FC<React.HTMLAttributes<HTMLUListElement>>;
    li: React.FC<React.LiHTMLAttributes<HTMLLIElement>>;
    p: React.FC<React.HTMLAttributes<HTMLParagraphElement>>;
}

const components: Components = {
    code: Code,
    Counter,
    h1: (props) => <h1 className="text-3xl underline underline-offset-8 pb-5" {...props} />,
    h2: (props) => <h2 className="text-2xl underline underline-offset-8 pb-2" {...props} />,
    ol: (props) => <ol className="list-decimal pl-4" {...props} />,
    ul: (props) => <ul className="list-disc" {...props} />,
    li: (props) => <li className="p-1 m-1 decoration-dotted" {...props} />,
    p: (props) => <p className="py-1 my-1" {...props} />,
};

export default function MDXContent(
    props: JSX.IntrinsicClassAttributes<unknown> & MDXRemoteProps
) {
    return (
        <MDXRemote
            {...props}
            components={{...components, ...(props.components || {})}}
        />
    )
}

