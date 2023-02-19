import React, { useState } from 'react';
import { Link, Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import { Inertia } from '@inertiajs/inertia';


export default function EditNews(props) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    // const [isNotif, setIsNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            id: props.myNews.id, title, description, category
        }
        Inertia.post('/news/update', data);
        // setIsNotif(true);
        setTitle('');
        setDescription('');
        setCategory('');
    }


    return (
        <div className='min-h-screen bg-slate-100'>
            <Navbar user={props.auth.user} />
            <div className="card w-full bg-base-100 shadow-xl my-2">
                <div className='font-bold text-3xl text-center pt-10'>Edit Berita</div>
                <div className="card-body">
                    <input type="text" placeholder="Judul" className="m-2 input input-bordered w-full" onChange={(ev) => setTitle(ev.target.value)} defaultValue={props.myNews.title} />
                    <input type="text" placeholder="Judul" className="m-2 input input-bordered w-full" onChange={(ev) => setDescription(ev.target.value)} defaultValue={props.myNews.description} />
                    <input type="text" placeholder="Judul" className="m-2 input input-bordered w-full" onChange={(ev) => setCategory(ev.target.value)} defaultValue={props.myNews.category} />
                    <button className='btn- btn-primary m-2 py-2 px-4 rounded-md' onClick={() => handleSubmit()}>Update</button>
                </div>
            </div>
        </div>
    )
}