import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import Image from 'next/image';

const PageEducacion = () => {
    return (
        <main className='pb-10'>
          <Container>
            <Title title='Area educativa' />
            <div className='mt-10 space-y-10'>
              <h1 className='text-gray-100 text-3xl bg-blue-500'>Estudios</h1>
              <ul className="list-disc pl-5">  
                <li>Universidad Rafel Landivar - 9no semestre en Informática y Sistemas</li>
                <li>
                    Colegio La Patria 
                    <ul className="list-circle pl-5">
                        <li>2016-2017</li>
                        <li>Bachiller en Computación con orientación científica.</li>
                    </ul>
                </li>
              </ul>

              <h1 className='text-gray-100 text-3xl bg-blue-500'>Idiomas</h1>
              <ul className="list-disc pl-5">  
                <li>Español nativo</li>
                <li>Ingles basico</li>
              </ul>

              <h1 className='text-gray-100 text-3xl bg-blue-500'>Otras participaciones</h1>
              <ul className="list-disc pl-5">  
                <li>Integrante de jovenes pioneras de Fondo Quetzal, asociación MAIA.</li>
                <li>Integrante de Red estudiantil Universidad Rafael Landivar 2021-2022</li>
              </ul>

            </div>
          </Container>
        </main>
      );
};
export default PageEducacion;