import Header from "../components/Header"

export default ({ children }: any) => {
    return (
        <>
            <Header />
            <section>
                {children}
            </section>
        </>
    )
}