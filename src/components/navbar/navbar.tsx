import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>

        <div className='w-full flex justify-center py-4
                      bg-indigo-900 text-white'>

        <div className="container flex justify-between text-lg mx-8">
            <Link to='/home' className="text-2x1 font-bold">Blog Pessoal</Link>
            
            <div className='flex gap-4'>
              <Link to='/postagens'>Postagens</Link>
              <Link to='/temas'>Temas</Link>
              <Link to='/cadastrar-tema'>Cadastrar tema</Link>
              <Link to='/perfil'>Perfil</Link>
              <Link to='/sair'>Sair</Link>
            </div>
          </div>
</div>
</>
)
}

export default Navbar
