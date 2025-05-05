import { JSX } from 'react';
import { highlight} from 'sugar-high';

import Counter from '@/components/counter';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Code({ children, ...props } : any) {
    const codeHTML = highlight(children);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

const components = {
    code: Code,
    Counter
}

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

