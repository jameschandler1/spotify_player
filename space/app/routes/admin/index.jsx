import {Link} from "remix";

export default function AdminIndex() {
    return (
        <p>
            <Link to="new">Create a new Posts</Link>
        </p>
    )
}