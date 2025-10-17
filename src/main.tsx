import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './routes/home.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import RootLayout from "./layouts/root-layout.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
            <Route element={<RootLayout />} >
                <Route  index element={<Home />} />
            </Route>
        </Routes>
      </BrowserRouter>,
  </StrictMode>,
)
