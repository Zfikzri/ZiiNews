import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Berita Saya</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                   
                        <div className="p-6 text-white">
                        <input type="text" placeholder="Judul" className="m-2 input input-bordered w-full " />
                        <input type="text" placeholder="Deskripsi" className="m-2 input input-bordered w-full " />
                        <input type="text" placeholder="Kategori" className="m-2 input input-bordered w-full " />
                        <button className='btn btn-primary m-2'>SUBMIT</button>
                        </div>
                    </div>
               
            </div>
        </AuthenticatedLayout>
    );
}
