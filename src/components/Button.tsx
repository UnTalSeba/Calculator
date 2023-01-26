interface Format {
    symbol: string
}


export const Button = ( { symbol} : Format ) => {
    return(
        <>
            <div className="bg-sky-300 rounded-lg p-2 w-16 h-16 flex items-center justify-center
                            m-1.5">
                { symbol }
            </div>
        
        </>
    )

}

export default Button;
