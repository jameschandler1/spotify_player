import {Form, redirect} from "remix";
import { createPost } from "~/post";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const title = formData.get('title');
    const slug = formData.get('slug');
    const markdown = formData.get('markdown');

    await createPost({
        title,
        slug,
        markdown
    });

    return redirect('/admin');
};




export default function newPost() {
    return (
        <Form method='post'>
            <p>
                <label>
                    Post title: <input type='text' name='title'/>
                </label>
            </p>
            <p>
                <label>
                    Post slug: <input type='text' name='slug'/>
                </label>
            </p>
            <p>
                <label htmlFor='markdown'>Markdown</label>
                <br />
                <textarea name='markdown' id='markdown' rows='10' cols='80'/>
            </p>
            <p>
                <button type='submit'>Create</button>
            </p>
        </Form>
    )
}