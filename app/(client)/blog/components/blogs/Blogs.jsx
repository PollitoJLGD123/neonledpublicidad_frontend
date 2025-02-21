import React from 'react';

const Blogs = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Blog 1 */}
        <div className="bg-[#0e1721] rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:h-80">
            <div className="relative h-56 lg:h-full lg:w-2/5">
              <img 
                src="/blog/ACRILICO.png" 
                alt="Brilla con Estilo" 
                className="w-full h-full object-cover"
              />
              <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-r from-transparent to-[#0e1721]"></div>
            </div>
            
            <div className="w-full lg:w-3/5 p-8 flex flex-col justify-center">
              <div className="text-center max-w-sm mx-auto space-y-4">
                <h2 className="text-2xl font-bold text-white">Brilla con Estilo</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Modernas y llamativas, las letras acrílicas luminosas destacan tu marca o decoran con elegancia. ¡Ilumina tu creatividad! 💡🔠
                </p>
                <div className="pt-8">
                  <button className="w-[200px] px-6 py-2 rounded-full bg-gradient-to-r from-[--azul_cobalto] to-[--azul_cobalto] text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 flex justify-center items-center">
                    Leer más
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog 2 */}
        <div className="bg-[#0e1721] rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:h-80">
            <div className="relative h-56 lg:h-full lg:w-2/5">
              <img 
                src="/blog/DISPLAY.png" 
                alt="Hipnotizalos" 
                className="w-full h-full object-cover"
              />
              <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-r from-transparent to-[#0e1721]"></div>
            </div>
            <div className="w-full lg:w-3/5 p-8 flex flex-col justify-center">
              <div className="text-center max-w-sm mx-auto space-y-4">
                <h2 className="text-2xl font-bold text-white">Atrae Clientes ✨</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Destaca tu marca con carteles iluminados que captan miradas. Innovadores, atractivos y efectivos. ¡Haz que tu publicidad brille! 💡🚀
                </p>
                <div className="pt-8">
                  <button className="w-[200px] px-6 py-2 rounded-full bg-gradient-to-r from-[--azul_cobalto] to-[--azul_cobalto] text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 flex justify-center items-center">
                    Leer más
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog 3 */}
        <div className="bg-[#0e1721] rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:h-80">
            <div className="relative h-56 lg:h-full lg:w-2/5">
              <img 
                src="/blog/HOLOGRAFICO.png" 
                alt="Hipnotizalos" 
                className="w-full h-full object-cover"
              />
              <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-r from-transparent to-[#0e1721]"></div>
            </div>
            <div className="w-full lg:w-3/5 p-8 flex flex-col justify-center">
              <div className="text-center max-w-sm mx-auto space-y-4">
                <h2 className="text-2xl font-bold text-white">Hipnotizalos</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Cautiva con visuales 3D futuristas. Tus anuncios cobrarán vida con hologramas que atraen, sorprenden y convierten. 🚀 🎥                
                </p>
                <div className="pt-8">
                  <button className="w-[200px] px-6 py-2 rounded-full bg-gradient-to-r from-[--azul_cobalto] to-[--azul_cobalto] text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 flex justify-center items-center">
                    Leer más
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog 4 */}
        <div className="bg-[#0e1721] rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:h-80">
            <div className="relative h-56 lg:h-full lg:w-2/5">
              <img 
                src="/blog/LETRANEONLED.png" 
                alt="Hipnotizalos" 
                className="w-full h-full object-cover"
              />
              <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-r from-transparent to-[#0e1721]"></div>
            </div>
            <div className="w-full lg:w-3/5 p-8 flex flex-col justify-center">
              <div className="text-center max-w-sm mx-auto space-y-4">
                <h2 className="text-2xl font-bold text-white">Tu Bar, en la Mira</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Haz que el nombre de tu bar destaque con letras neón LED. Crea un ambiente único que atraiga miradas y clientes. ¡Ilumina tu identidad! 🍹🔆                
                </p>
                <div className="pt-8">
                  <button className="w-[200px] px-6 py-2 rounded-full bg-gradient-to-r from-[--azul_cobalto] to-[--azul_cobalto] text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 flex justify-center items-center">
                    Leer más
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog 5 */}
        <div className="bg-[#0e1721] rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:h-80">
            <div className="relative h-56 lg:h-full lg:w-2/5">
              <img 
                src="/blog/LETRASDORADAS.png" 
                alt="Hipnotizalos" 
                className="w-full h-full object-cover"
              />
              <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-r from-transparent to-[#0e1721]"></div>
            </div>
            <div className="w-full lg:w-3/5 p-8 flex flex-col justify-center">
              <div className="text-center max-w-sm mx-auto space-y-4">
                <h2 className="text-2xl font-bold text-white">Puro Lujo</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Brilla con estilo y distinción. Las letras doradas y plateadas aportan prestigio, presencia y posiciona tu marca o negocio. ¡Haz que te noten! 💛
                </p>
                <div className="pt-8">
                  <button className="w-[200px] px-6 py-2 rounded-full bg-gradient-to-r from-[--azul_cobalto] to-[--azul_cobalto] text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 flex justify-center items-center">
                    Leer más
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog 6 */}
        <div className="bg-[#0e1721] rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:h-80">
            <div className="relative h-56 lg:h-full lg:w-2/5">
              <img 
                src="/blog/LETREROLUMINOSO.png" 
                alt="Hipnotizalos" 
                className="w-full h-full object-cover"
              />
              <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-r from-transparent to-[#0e1721]"></div>
            </div>
            <div className="w-full lg:w-3/5 p-8 flex flex-col justify-center">
              <div className="text-center max-w-sm mx-auto space-y-4">
                <h2 className="text-2xl font-bold text-white">Conquista Miradas</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                Atrae con un diseño agradable, moderno y llamativo. La iluminación ideal para resaltar tu local y hacerlo inolvidable, de día y de noche. 🔆
                </p>
                <div className="pt-8">
                  <button className="w-[200px] px-6 py-2 rounded-full bg-gradient-to-r from-[--azul_cobalto] to-[--azul_cobalto] text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 flex justify-center items-center">
                    Leer más
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;