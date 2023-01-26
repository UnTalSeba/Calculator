interface Format {
    symbol: string
}


export const Screen = ( { symbol} : Format ) => {
    return(
        <>
            <div className="bg-sky-400 rounded-lg p-2 w-72 h-20 block text-right m-3">
                <div className="text-slate-200 text-lg">
                    holi
                </div>
                <div className="text-white text-3xl">
                    {symbol}
                </div>
            </div>
        
        </>
    )

}

export default Screen;
