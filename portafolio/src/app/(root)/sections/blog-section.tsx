'use client';

import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";
import ListBlog from "@/components/list-blog";

const BlogSection= () => {
    const router = useRouter();

	return(<section id="ventures" className="border-b border-gray-300/30 py-10">
        <Container>
            <Title title="Blog"></Title>
            <ListBlog/>
            <Button label='Ver los Post' onClick={() => router.push('/blog')}/>
        </Container>

    </section>);
}
export default BlogSection;