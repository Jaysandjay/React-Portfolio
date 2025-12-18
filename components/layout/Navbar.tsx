
export default function Navbar() {
    return(
        <div className="p-5 w-full flex justify-center gap-8 bg-gray-900 text-white ">
            <div>
                <a href="/">Home</a>
            </div>
            <div>
                <a href="/about">About</a>
            </div>
            <div>
                <a href="/projects">Projects</a>
            </div>
            <div>
                <a href="/education">Education</a>
            </div>
            <div>
                <a href="/contact">Contact</a>
            </div>
        </div>
    )
} 