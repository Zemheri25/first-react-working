import { useState, useEffect } from 'react';
import React from 'react'
import BlogList from './BlogList';

export default function Home() {
    const [name, setName] = useState("mario")


    const [blogs, setBlogs] = useState ([
        {title: "My new webiste", body:"Lorem ipsum", author:"mario", id:1},
        {title: "Welocome party!", body : "lorem ipsum", author : "yoshi", id: 2},
        {title: "Web dev top tips", body: "lorem ipsum", author : "mario", id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)
    }

    useEffect(() => {
        console.log("use effect ran");
    }, [])
        

    return (
    <div className='home'>
        <BlogList blogs = {blogs} title = "All Blogs!" handleDelete = {handleDelete}/>
        
        
        
        
        
    </div>
  )
}

