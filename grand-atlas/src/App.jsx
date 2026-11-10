import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Units from './pages/Units.jsx'
import UnitDetails from './pages/UnitDetails.jsx'
import Zones from './pages/Zones.jsx'
import ZoneProjects from './pages/ZoneProjects.jsx'
import ProjectDetails from './pages/ProjectDetails.jsx'
import Developers from './pages/Developers.jsx'
import DeveloperProjects from './pages/DeveloperProjects.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="units" element={<Units />} />
        <Route path="units/:unitId" element={<UnitDetails />} />
        <Route path="zones" element={<Zones />} />
        <Route path="zones/:zoneId" element={<ZoneProjects />} />
        <Route path="projects/:projectId" element={<ProjectDetails />} />
        <Route path="developers" element={<Developers />} />
        <Route path="developers/:developerId" element={<DeveloperProjects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
