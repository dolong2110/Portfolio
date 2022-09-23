import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/react-pages' element={<Layout />}>
        </Route>
      </Routes>
    </>
  )
}

export default App;
