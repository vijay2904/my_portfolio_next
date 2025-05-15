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
    h1:　React.FC<React.OlHTMLAttributes<HTMLHeadingElement>>;
    ol: React.FC<React.OlHTMLAttributes<HTMLOListElement>>;
    ul: React.FC<React.OlHTMLAttributes<HTMLUListElement>>;
}

const components: Components = {
    code: Code,
    Counter,
    h1:　(props) => <h1 className="text-3xl" {...props} />,
    ol: (props) => <ol className="list-decimal pl-4" {...props} />,
    ul: (props) => <ul className="list-disc" {...props} />,
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

