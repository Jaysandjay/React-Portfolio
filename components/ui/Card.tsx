import { ReactNode } from "react"

interface cardProps {
    title?: string,
    description?: string,
    children?: ReactNode,
    image?: string
    color?: string
}

export default function Card({title, description, children, image, color} : cardProps) {
    return (
        <div className={`mx-auto max-w-[90vw] h-50 ${color ? color :  'bg-white' } shadow-lg rounded-lg overflow-hidden h-fit p-5 m-5`}>
        <div>
            {image && (
                <img className="h-15 mb-5" src={image}/>
            )}
            <h4 className="mb-2 text-xl font-semibold tracking-tight text-gray-800">
                {title}
            </h4>
            {description && (
                <p className="text-gray-600 text-sm">
                {description}
                </p>
            )}
        </div>
        <div>
            {children}
        </div>
        </div>

    )
}
