
type Props = {
    heading: string
}

export default function Headings({ heading }: Props) {
    return (
        <div>
            <h2 className="text-center text-white bg-black  p-2">{heading}</h2>
        </div>
    )
}