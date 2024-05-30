import Container from '@/components/ui/container';
import Subtitle from '@/components/ui/subtitle';
import Image from 'next/image';

const Proyectos = () => {
  return (
    <section
      id='SectionTheProject'
      className='border-b border-gray-500/30 py-10' >
      <Container>
        <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between mb-10 gap-5'>
          <Subtitle subtitle='SmartMuni' className='my-0' />
          <ul className='space-y-8'>
            <li className='max-w-2xl'>
              <h4 className='text-xl text-white font-medium mb-2'>Descripción del proyecto</h4>
              <p className='text-sm text-gray-400'>
                Aplicación web con el objetivo de ayudar a la municipalidad a gestionar eficientemente los 
                servicios municipales de agua potable, drenaje y desechos sólidos.
              </p>
            </li>
            <li className='max-w-2xl'>
              <h4 className='text-xl text-white font-medium mb-2'>Rol dentro del proyecto</h4>
              <p className='text-sm text-gray-400'>
                <ul className="list-disc pl-5">
                    <li>Documentación</li>
                    <li>Diseño de Gráficas</li>
                </ul>
              </p>
            </li>
            <li className='max-w-2xl'>
              <h4 className='text-xl text-white font-medium mb-2'>Impacto o Resultado</h4>
              <p className='text-sm text-gray-400'>
                Un trabajo en equipo organizado el cual se baso en varios lideres que facilitaron 
                retroalimentaciones continuas, lo que resultó en una entrega satisfactoria. 
              </p>
            </li>
          </ul>
        </div>
        <div className='relative w-full h-96 sm:h-[500px] lg:h-[700px] rounded-xl mb-10'>
          <Image
            src='/imagenes/pro1.jpeg'
            alt='Image'
            fill
            className='object-cover rounded-xl'
          />
        </div>
      </Container>
      <Container>
        <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between mb-10 gap-5'>
          <Subtitle subtitle='SupplyPro' className='my-0' />
          <ul className='space-y-8'>
            <li className='max-w-2xl'>
              <h4 className='text-xl text-white font-medium mb-2'>Descripción del proyecto</h4>
              <p className='text-sm text-gray-400'>
                Aplicacion Web la cual consistia en procesos industriales, se contaba con modulos como
                minorista, mayorista, intermedio, la cual debian comunicar la demanda de sus productos.
              </p>
            </li>
            <li className='max-w-2xl'>
              <h4 className='text-xl text-white font-medium mb-2'>Rol dentro del proyecto</h4>
              <p className='text-sm text-gray-400'>
                <ul className="list-disc pl-5">
                    <li>Documentación</li>
                    <li>Modulo Inventario Minorista</li>
                </ul>
              </p>
            </li>
            <li className='max-w-2xl'>
              <h4 className='text-xl text-white font-medium mb-2'>Impacto o Resultado</h4>
              <p className='text-sm text-gray-400'>
                El equipo se dió cuanta de la importancia de la implementación de desarrollo 
                dentro del area industrial, ya que tiene muchos detalles y como no puede haber
                errores dentro de los procesos fue muy laborioso. 
              </p>
            </li>
          </ul>
        </div>
        <div className='relative w-full h-96 sm:h-[500px] lg:h-[500px] rounded-xl mb-10'>
          <Image
            src='/imagenes/pro22.jpeg'
            alt='Image'
            fill
            className='object-cover rounded-xl'
          />
        </div>
      </Container>
      <Container>
        <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between mb-10 gap-5'>
          <Subtitle subtitle='MapaQgis' className='my-0' />
          <ul className='space-y-8'>
            <li className='max-w-2xl'>
              <h4 className='text-xl text-white font-medium mb-2'>Descripción del proyecto</h4>
              <p className='text-sm text-gray-400'>
                Se realizó una pagina Web por medio de CloudQgis en donde se alojo un mapa 
                con puntos de referencia y datos especificos de la data. 
              </p>
            </li>
            <li className='max-w-2xl'>
              <h4 className='text-xl text-white font-medium mb-2'>Rol dentro del proyecto</h4>
              <p className='text-sm text-gray-400'>
                <ul className="list-disc pl-5">
                    <li>Ubicacion de puntos de interes</li>
                    <li>Mapeo/coordenadas</li>
                    <li>Despliegue en CloudQgis </li>
                </ul>
              </p>
            </li>
            <li className='max-w-2xl'>
              <h4 className='text-xl text-white font-medium mb-2'>Impacto o Resultado</h4>
              <p className='text-sm text-gray-400'>
                Se experimento con nuevas tecnologías que no sé conocian antes y que ahora no queda 
                más que expandir conocimientos para aplicarlo en futuros proyectos. 
              </p>
            </li>
          </ul>
        </div>
        <div className='relative w-full h-96 sm:h-[500px] lg:h-[700px] rounded-xl mb-10'>
          <Image
            src='/imagenes/pro31.png'
            alt='Image'
            fill
            className='object-cover rounded-xl'
          />
        </div>
      </Container>
    </section>
  );
};

export default Proyectos;