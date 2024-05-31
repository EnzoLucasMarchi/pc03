

export const Buttons = ()=>{

    const buttonList=[5, 10, 15, 25, 50]

    return(
        <>
             <ul>
                {
                    buttonList.map(button => 
                    <li key={button} id={`percentage-${button}`}><button type="button" className="percentage-button" value={button}>
                        {button}%
                        </button></li>
                        )
                }

  
            <li><input type="number" placeholder="Custom" id="custom-percentage-button" className="percentage-button" /></li>
          </ul>
        </>
    )
}