import React from 'react';

const Comunidad: React.FC = () => {
  return (
    <>    
    <div className="justify-center ">
      <div className="font-[sans-serif] bg-white w-screen my-8 mb-20 mt-20">
        <h2 className="text-[#333] text-4xl text-center font-extrabold mb-20 relative after:absolute after:w-1/3 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-cyan-500 after:rounded-full">BIENVENIDO A NUESTRA COMUNIDAD</h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-y-10 md:grid-cols-2 gap-x-12">
          <div className="text-right">
            <a href="#"><img src="./public/img/juguetes01.jpg" alt="" className="inline rounded-lg lg:w-10/12 w-full object-cover" /></a>
          </div>
          <div className='text-justify w-9/12' style={{ margin: '0 7%' }}>
            <p className="text-base text-cyan-950 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac enim velit. Donec iaculis, dui sed auctor ultricies, eros enim faucibus nisl, ac semper eros eros vitae nulla. Donec non quam in enim semper dignissim.</p>
            <p className="text-base text-cyan-950">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam, ipsum vel iaculis bibendum, justo turpis ullamcorper mauris, non aliquam nisi purus vel nisl. Integer efficitur turpis in bibendum tincidunt. Nulla facilisi. Vestibulum fringilla leo et purus consectetur, vel tincidunt dolor rhoncus.</p>
          </div>
        </div>
      </div>
      
      <div className='flex flex-col items-center justify-center w-full max-w-lg mx-auto'>
        <div className='mb-20 mt-20'>
          <h1 className='text-[#333] text-4xl text-center font-extrabold mb-16 relative after:absolute after:w-1/3 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-cyan-500 after:rounded-full'> CUIDADOS EN GESTACIÓN</h1>
          <picture className='flex justify-center'>
            <img src="./public/img/mama.jpg" alt="" className='object-center mb-8' style={{ width: '85%' }} />
          </picture>
          <div className='flex justify-center' style={{ margin: '0 7%' }}>
            <p className='text-justify flex text-cyan-950' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur iure accusamus impedit excepturi blanditiis, suscipit incidunt. 
               Nesciunt vel, doloribus laudantium quia, perspiciatis quas quibusdam laborum neque ex ipsum veritatis.
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo in amet tempora, ea excepturi natus assumenda, nihil, 
               perspiciatis quae sunt mollitia tempore suscipit veniam voluptatibus sapiente. Quos dolores pariatur ut. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, quibusdam iusto. Ipsum suscipit commodi dolor eveniet a maiores. 
               Impedit veritatis ullam soluta accusantium quis. Error earum quisquam quaerat voluptatum velit. 
            </p>
            <p className='text-justify flex text-cyan-950' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur iure accusamus impedit excepturi blanditiis, suscipit incidunt. 
               Nesciunt vel, doloribus laudantium quia, perspiciatis quas quibusdam laborum neque ex ipsum veritatis.
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo in amet tempora, ea excepturi natus assumenda, nihil, 
               perspiciatis quae sunt mollitia tempore suscipit veniam voluptatibus sapiente. Quos dolores pariatur ut. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, quibusdam iusto. Ipsum suscipit commodi dolor eveniet a maiores. 
               Impedit veritatis ullam soluta accusantium quis. Error earum quisquam quaerat voluptatum velit.
            </p>
          </div>
        </div>
        <div className='mb-20 mt-20'>
          <h1 className='text-[#333] text-4xl text-center font-extrabold mb-16 relative after:absolute after:w-1/3 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-cyan-500 after:rounded-full'> PRIMEROS MESES</h1>
          <picture className='flex justify-center'>
            <img src="./public/img/papa.jpg" alt="Papa duerme con su Bebe" className='mb-8 object-center' style={{ width: '85%' }} />
          </picture>
          <div className='flex justify-center' style={{ margin: '0 7%' }}>
            <p className='text-justify flex text-cyan-950' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur iure accusamus impedit excepturi blanditiis, suscipit incidunt. 
               Nesciunt vel, doloribus laudantium quia, perspiciatis quas quibusdam laborum neque ex ipsum veritatis.
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo in amet tempora, ea excepturi natus assumenda, nihil, 
               perspiciatis quae sunt mollitia tempore suscipit veniam voluptatibus sapiente. Quos dolores pariatur ut. Lorem ipsum, dolor sit amet consectetur 
               adipisicing elit. Animi, quibusdam iusto. Ipsum suscipit commodi dolor eveniet a maiores. 
               Impedit veritatis ullam soluta accusantium quis. Error earum quisquam quaerat voluptatum velit.

               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor omnis ipsa fugiat dolorem inventore maxime ipsum? 
               Laudantium impedit hic qui, ex dolorum aliquam necessitatibus saepe quo nostrum voluptates neque odit?
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white font-[sans-serif] my-8 max-w-7xl mx-auto " style={{ width: '80%' }}>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#333] mb-16 relative after:absolute after:w-1/3 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-cyan-500 after:rounded-full">ÚLTIMOS BLOGS</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 max-w-lg mx-auto">
          <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
            <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1" className="w-full h-60 object-cover" />
            <div className="p-6">
              <span className="text-sm block text-gray-400 mb-2">10 FEB 2023 | BY JOHN DOE</span>
              <h3 className="text-xl font-bold text-[#333]">Como estimular la mente de nuestro Bebe</h3>
              <hr className="my-6" />
              <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
            </div>
          </div>
          <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
            <img src="https://readymadeui.com/hacks-watch.webp" alt="Blog Post 2" className="w-full h-60 object-cover" />
            <div className="p-6">
              <span className="text-sm block text-gray-400 mb-2">7 JUN 2023 | BY MARK ADAIR</span>
              <h3 className="text-xl font-bold text-[#333]">Que regalar a nuestros Hijos</h3>
              <hr className="my-6" />
              <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
            </div>
          </div>
          <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
            <img src="./public/img/pañalitis.jpg" alt="Blog Post 3" className="w-full h-60 object-cover" />
            <div className="p-6">
              <span className="text-sm block text-gray-400 mb-2">5 OCT 2023 | BY SIMON KONECKI</span>
              <h3 className="text-xl font-bold text-[#333]">Como evitar la pañalitis</h3>
              <hr className="my-6" />
              <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Comunidad;
