import Image from "next/image";

export default function Home() {
    return(
        <div className="relative w-24 h-24">
            <Image src='https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1717026740~exp=1717030340~hmac=7e57df132c54acc90b8b47062cbe61fc19265d7c2b5727d7498fd4a611aa8249&w=826'
                alt="Image" 
                fill
                className="object-cover rounded-xl"
            />
        </div>
    );
}