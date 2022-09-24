import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/react-pages' element={<Layout/>}>
          <Route index element={<Home/>}>

          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;
