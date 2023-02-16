import { Link, Head } from '@inertiajs/react';

export default function Homapage(props) {

    console.log(props);
    return (
        <div className='flex justify-center items-center min-h-screen bg-slate-100'>
            <Head title={props.title} />
            <h1>Home Page</h1>
            <div>
                <p>{props.description}</p>
                {
                    props.news ? props.news.map((data, i) => {
                        return (
                            <div key={i} className='p-4 m-2 bg-white text-black shadow-sm rounded-md'>
                                <p className='text-2xl'>{data.title}</p>
                                <p className='text-sm'>{data.description}</p>
                                <i className=''>{data.category}</i>
                                <i className=''>{data.author}</i>
                            </div>
                        )
                    }) : <p>Saat ini belum ada berita</p>
                }
            </div>
        </div>
    )
}