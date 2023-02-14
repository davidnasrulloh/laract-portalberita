import { Link, Head } from '@inertiajs/react';

export default function Homapage(props) {

    console.log(props);
    return (
        <div className='flex justify-center items-center min-h-screen bg-neutral-700 text-white text-2xl'>
            <Head title={props.title} />
            <h1>Home Page</h1>
            <p>{props.description}</p>
        </div>
    )
}