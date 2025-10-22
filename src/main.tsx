import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './routes/home.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import RootLayout from "./layouts/root-layout.tsx";
import Contact from "./routes/contact.tsx";
import About from "./routes/about.tsx";
import Skills from "./routes/skills.tsx";
import VideoBlog from "./routes/video-blog.tsx";
import Portfolio from "./routes/portfolio.tsx";
import Timeline from "./routes/timeline.tsx";
import {CustomFooter} from "./layouts/custom-footer.tsx";
import {CustomNav} from "./layouts/custom-nav.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <CustomNav/>
        <Routes>
            <Route element={<RootLayout />} >
                <Route  index element={<Home />} />
                <Route path={'/contact'} element={<Contact/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path ={'/skills'} element={<Skills/>}/>
                <Route path={'/portfolio'} element={<Portfolio/>}/>
                <Route path={'/timeline'} element={<Timeline/>} />
                <Route path={'/videoblog'} element={<VideoBlog/>}/>
            </Route>
        </Routes>
          <CustomFooter/>
      </BrowserRouter>,
  </StrictMode>,
)

