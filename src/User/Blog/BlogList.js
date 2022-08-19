import { Link } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import { getServiceBlogData } from '../../Service/Blog';

export default function BlogList() {
  const [Blogs, setBlog] = useState([])
    useEffect(() => {
      BlogListData();
    }, []);

  const BlogListData = async()=>{
    const ServiceBlogList = await getServiceBlogData();
    setBlog(ServiceBlogList)
  }

  return (
    <div style={{ marginTop: "100px" }}>
      <section id="blog" className="blog">
      <div className="container" data-aos="fade-up">

        <div className="row">

        <div className="col-lg-8 entries">
 
      {
          Blogs.map((blog, index)=>
              <article className="entry">

              <div className="entry-img">
                <img src="./frontend/images/blog1.png" alt="" className=""/>
              </div>
      
              <h2 className="entry-title">
                <a href="blog-single.html">{blog.title}</a>
              </h2>
      
              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="blog-single.html">John Doe</a></li>
                  <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></a></li>
                  <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="blog-single.html">12 Comments</a></li>
                </ul>
              </div>
      
              <div className="entry-content">
                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                  Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
                </p>
                <div className="read-more">
                  <Link to={`/blog/detail/${blog.id} `}>Read More</Link>
                </div>
              </div>
      
              </article>
          )
      }
        
        <div className="blog-pagination">
          <ul className="justify-content-center">
            <li><a href="#">1</a></li>
            <li className="active"><a href="#">2</a></li>
            <li><a href="#">3</a></li>
          </ul>
        </div>

      </div>

          <div className="col-lg-4">

            <div className="sidebars" >

              <h3 className="sidebar-title">Search</h3>
              <div className="sidebar-item search-form">
                <form action="" className='form-inline'>
                  <input className='form-control' type="text"/>
                  <button type="submit"><i className="bi bi-search"></i></button>
                </form>
              </div>

              <h3 className="sidebar-title">Categories</h3>
              <div className="sidebar-item categories">
                <ul>
                  <li><a href="#">General <span>(25)</span></a></li>
                  <li><a href="#">Lifestyle <span>(12)</span></a></li>
                  <li><a href="#">Travel <span>(5)</span></a></li>
                  <li><a href="#">Design <span>(22)</span></a></li>
                  <li><a href="#">Creative <span>(8)</span></a></li>
                  <li><a href="#">Educaion <span>(14)</span></a></li>
                </ul>
              </div>

              <h3 className="sidebar-title">Recent Posts</h3>
              <div className="sidebar-item recent-posts">
                <div className="post-item clearfix">
                  <img src="./frontend/images/blog1.png" alt=""/>
                  <h4><a href="blog-single.html">Nihil blanditiis at in nihil autem</a></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>

                <div className="post-item clearfix">
                  <img src="./frontend/images/blog1.png" alt=""/>
                  <h4><a href="blog-single.html">Quidem autem et impedit</a></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>

                <div className="post-item clearfix">
                  <img src="./frontend/images/blog1.png" alt=""/>
                  <h4><a href="blog-single.html">Id quia et et ut maxime similique occaecati ut</a></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>

                <div className="post-item clearfix">
                  <img src="./frontend/images/blog1.png" alt=""/>
                  <h4><a href="blog-single.html">Laborum corporis quo dara net para</a></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>

                <div className="post-item clearfix">
                  <img src="./frontend/images/blog1.png" alt=""/>
                  <h4><a href="blog-single.html">Et dolores corrupti quae illo quod dolor</a></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
      </section>
    </div>
  )
}
