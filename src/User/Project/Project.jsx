import React, { useEffect, useState } from 'react'
import { getServiceUserCategoryData } from '../../Service/Category'
import { getServiceUserProjectData } from '../../Service/Project'
import {Link} from 'react-router-dom'

export default function Project() {

  /* list show for project useState */
  const [categories, setCategory] = useState([])
  const [projects, setProject] = useState([])

  /*data from service */
  const CategoryListData  = async()=> {
    const data = await getServiceUserCategoryData()
    setCategory(data)
  }

  const portfolioListData = async() => {
    const data = await getServiceUserProjectData()
    setProject(data)
    console.log(data)
  }

  /**useEffect */
  useEffect(()=>{
    CategoryListData()
    portfolioListData()
  },[])


  return (
    <div>
    <section id="portfolio" class="portfolio">
    <div class="container">

      <div class="row" data-aos="fade-up">
        <div class="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="*" class="filter-active">All</li>

              {
                categories.map((cat, index)=> 
                  <li data-filter=".filter-app">{cat.name}</li>
                )
              }

          </ul>
        </div>
      </div>

      <div class="row portfolio-container" data-aos="fade-up">

      {
          projects.map((project, index) => 
          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <img src={project.image} width="100%" height="300" alt="" />
          <div class="portfolio-info">
            <h4>{project.title}</h4>
            <p>{project.category ? project.category.name : "portfolio"}</p>
            <Link to={`/project/show/${project._id}`} class="details-link" title="More Details"><i class="bx bx-link"></i></Link>
          </div>
          </div>
        )
      }
       

      </div>

    </div>
      </section>
    </div>
  )
}
