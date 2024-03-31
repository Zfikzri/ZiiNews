import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/HomePage/NewsList";
import Paginator from "@/Components/HomePage/Paginator";

export default function HomePage(props) {
    // console.log(props);
    return (
        <div className="min-h-screen bg-slate-50 ">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="flex justify-center flex-col lg:flex-row flex-wrap items-stretch items-center gap-4 p-4">
            <NewsList news={props.news.data}/>
            </div>
            <div className="flex justify-center items-center">
                <Paginator meta={props.news.meta}/>
            </div>
        </div>
    );
}
