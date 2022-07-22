import { Fragment } from "react";
import Link from "next/link";

function news() {
    return ( <Fragment>
        <h1>News pages</h1>
        <ul>
            <li>
                <Link href="/news/nextjs-is-a-great-frameworks">
                    Nextjs is a great framework
                </Link>
            </li>
        </ul>
    </Fragment> );
}

export default news;