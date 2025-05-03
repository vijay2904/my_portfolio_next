import { JSX } from 'react';
import { highlight} from 'sugar-high';

import Counter from '@/components/counter';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';

function Code({ children, ...props } : any) {
    let codeHTML = highlight(children);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

const components = {
    code: Code,
    Counter
}

export default function MDXContent(
    props: JSX.IntrinsicClassAttributes<any> & MDXRemoteProps
) {
    return (
        <MDXRemote
            {...props}
            components={{...components, ...(props.components || {})}}
        />
    )
}

