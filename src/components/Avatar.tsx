export default ({ src }: { src: string }) => {
    return (
        <img className="rounded-3xl min-h-[42px] min-w-[42px]" height="42" width="42" src={src} />
    )
}