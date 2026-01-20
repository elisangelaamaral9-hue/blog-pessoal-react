function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-indigo-900 text-white">
        <div className="container flex justify-between text-lg">
          <h1 className="font-bold">Blog Pessoal</h1>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-200">Postagens</a>
            <a href="#" className="hover:text-gray-200">Temas</a>
            <a href="#" className="hover:text-gray-200">Cadastrar tema</a>
            <a href="#" className="hover:text-gray-200">Perfil</a>
            <a href="#" className="hover:text-gray-200">Sair</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;