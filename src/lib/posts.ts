import path from "path";
import fs from "fs";
import matter from "gray-matter";

const rootDirectory = path.join(process.cwd(), 'src', 'content', 'posts');

export type Post = {
    metadata: PostMetadata
    content: string
}

export type PostMetadata = {
    title?: string
    summary?: string
    image?: string
    author?: string
    publishedAt?: string
    slug: string
}


export async function getPostBySlug(slug: string, locale:string = 'en'): Promise<Post | null> {
    try {
        const filePath = path.join(rootDirectory, `${slug}.${locale}.mdx`);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const {data, content} = matter(fileContent);
        return {metadata: {...data, slug}, content};
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
        return null;
    }
}

export async function getPosts(limit?: number, locale:string = 'en'): Promise<PostMetadata[]> {
    const files = fs.readdirSync(rootDirectory);
    const posts = files
    .filter(file => file.endsWith(`.${locale}.mdx`))
    .map(file => getPostMetadata(file))
    .sort((a, b) => {
        if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
            return 1;
        } else {
            return -1;
        }
    });

    if(limit) {
        return posts.slice(0, limit) as PostMetadata[];
    }

    return posts as PostMetadata[];
}

export function getPostMetadata(filepath: string): PostMetadata {
    const slug = filepath.replace(/\.[en|jp]+\.mdx$/, '');
    // const slug = filepath.replace(/\.mdx$/, '')
    const filePath = path.join(rootDirectory, filepath)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    const { data } = matter(fileContent)
    return { ...data, slug }
  }