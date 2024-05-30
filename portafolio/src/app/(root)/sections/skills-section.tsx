import Container from '@/components/ui/container';
import Title from '@/components/ui/title';

const SkillsSection= () => {

	return<section id="skillsSection">
        <Container>
            <Title title='Lenguajes de Programación'/>
            <ul className="list-disc pl-5">
                <li>JAVA</li>
                <li>PYTHON</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>PHP (basico)</li>
            </ul>
        </Container>
            


    </section>;
}
export default SkillsSection;