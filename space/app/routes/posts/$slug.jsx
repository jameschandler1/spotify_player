import { useLoaderData } from "remix";
import {getPost} from "~/post";
import invariant from "tiny-invariant";

export const loader = async ({params}) => {
    invariant(params.slug, "expected parmas.slug");
    return getPost(params.slug);
}

export default function PostSlug() {
    const post = useLoaderData();
    return <div dangerouslySetInnerHTML={{ __html: post.html }} />;
}