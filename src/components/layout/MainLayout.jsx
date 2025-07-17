import Sidebar from './Sidebar';
import Header from './Header';

const MainLayout = ({ children, title = "Page Header Title", description = "Short Description Here" }) => {
  return (
    <div className="flex h-screen w-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
       <div className='ml-8 md:ml-0'> <Header title={title} description={description} /></div>
       
        <nav className="navigation px-8"></nav>
        <main className="content flex-1 p-8 overflow-auto">
          {children}
          
        </main>
        <footer className="footer px-8 py-4">
        </footer>
      </div>
    </div>
  );
}

export default MainLayout;
