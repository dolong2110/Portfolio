import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

const App = () => {
  return (
    <>
      <Routes path='/react-pages'>
        <Route path='/' element={<Layout />}>
        </Route>
      </Routes>
    </>
  )
}

export default App;
