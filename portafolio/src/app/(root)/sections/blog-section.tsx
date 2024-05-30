import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import CardBlog from "@/components/ui/card-blog";

const BlogSection= () => {
	return(<section id="ventures" className="border-b border-gray-300/30 py-10">
        <Container>
            <Title title="Blog"></Title>
            <div className="space-y-5">
                <CardBlog image='https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg?t=st=1717055120~exp=1717058720~hmac=e101f30b2ed9a2de7f6d27602438a161d1f86d3d9679d7380bc25ea9e1d8baff&w=826'
                    href='/blog/blog-1' 
                    title='Primer Blog'
                    category='Desing'
                    ago='4 min'    
                />
                <CardBlog image='https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010138.jpg?t=st=1717056079~exp=1717059679~hmac=11a9896a9b0b0cb13751635fb5b1fb2927ec0c5dfb99b15ee13e7e608ae62bb7&w=826'
                    href='/blog/blog-2' 
                    title='Segundo Blog'
                    category='Desing'
                    ago='4 min'    
                />
                <CardBlog image='https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?t=st=1717056119~exp=1717059719~hmac=36c17edac148aa3eb99d454f8397fc046f83e71be5d0785970033c8b4ab619c7&w=996'
                    href='/blog/blog-1' 
                    title='Tercer Blog'
                    category='Desing'
                    ago='4 min'    
                />
                <CardBlog image='https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169847.jpg?t=st=1717056145~exp=1717059745~hmac=8dc2b94b35b23fcedcf88a70bb45eb565cd10bec0c8ed607826df2d84faed458&w=740'
                    href='/blog/blog-1' 
                    title='Cuarto Blog'
                    category='Desing'
                    ago='4 min'    
                />            
            </div>
        </Container>

    </section>);
}
export default BlogSection;