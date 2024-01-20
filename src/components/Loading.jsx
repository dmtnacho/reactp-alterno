import SpinnerLoader from "./SpinnerLoader"


const Loading = () => {

    return (
        <div className="flex justify-center items-center flex-col gap-8 mt-20">
            <h2 className="text-2xl font-semibold">Espere un segundo...</h2>
            <SpinnerLoader />
        </div>
    )
}

export default Loading