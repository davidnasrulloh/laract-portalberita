import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';


export default function Dashboard(props) {

    // console.log(props)

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [isNotif, setIsNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            title, description, category
        }
        Inertia.post('/news', data);
        setIsNotif(true);
        setTitle('');
        setDescription('');
        setCategory('');
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                        {isNotif &&
                            <div className="alert alert-success shadow-lg">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>{props.flash.message}</span>
                                </div>
                            </div>
                        }
                        <input type="text" placeholder="Judul" className="m-2 input input-bordered w-full" onChange={(ev) => setTitle(ev.target.value)} value={title} />
                        <input type="text" placeholder="Deskripsi" className="m-2 input input-bordered w-full" onChange={(ev) => setDescription(ev.target.value)} value={description} />
                        <input type="text" placeholder="Kategori" className="m-2 input input-bordered w-full" onChange={(ev) => setCategory(ev.target.value)} value={category} />
                        <button className='btn- btn-primary m-2 py-2 px-4 rounded-md' onClick={() => handleSubmit()}>Submit</button>
                    </div>
                    <div className='p-8'>
                        Berita
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
