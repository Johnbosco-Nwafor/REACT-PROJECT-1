// import React from 'react'
import { Link } from 'react-router-dom'
import { Blog } from '../mirage/Blog'

const BlogLink = () => {
    const BlogLink = Blog.map((set)=>{
        return(
            <section key={set.id} className='set-id'>
                <Link className='linkid' to={`Blog/${set.id}`}>
                <img src={set.image} alt="" className='setImage'/>
                <div className='setCon'>
                    <h1 className='setH1'>{set.title}</h1>
                    <div className='set-flex'>
                        <p className='setCompany'>{set.company}</p>
                        <p className='setDate'>{set.date}</p>
                    </div>
                    <Link to={`Blog/${set.id}`}>Learn More</Link>
                </div>
                </Link>
            </section>
        )
    })
  return (
    <div className='property'>
        <p className='blogp'>OUR BLOG</p>
        <h1 className='blogh1'>Events Tips & Guides</h1>
        <div className='set-div'>
        {BlogLink}
    </div>
    </div>
  )
}

export default BlogLink