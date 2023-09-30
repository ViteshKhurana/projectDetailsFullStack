import React from 'react'
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import ProjectList from './Components/ProjectList';

const getFilteredItems= (query,projectList)=>{
  if(!query)
    return projectList;
  return projectList.filter(project => project.project_title.toLowerCase().includes(query) || project.project_technologies.toLowerCase().includes(query)  ||
  project.project_skillset_frontend.toLowerCase().includes(query) || project.project_skillset_backend.toLowerCase().includes(query) ||
  project.project_skillset_database.toLowerCase().includes(query));
};

function App() {
  
  const [projectList,setProjectList]=useState([])

  useEffect(()=>{
      fetch('http://localhost:5000/')
      .then(response => response.json())
      .then(data => setProjectList(data))
      .catch(err=>console.log(err))
  },[])


  const [query,setQuery] = useState("");

  const searchedItems=getFilteredItems(query.toLowerCase(),projectList);

  return (<>
      <div className='app'> 
        <input type="text" placeholder="...Search" onChange={e=>setQuery(e.target.value)} />
      </div>
      <br/>
      <ProjectList projectList={searchedItems}/>
      </>
  );
}

export default App;
