import { createContext, useState } from "react";
import { getYearsDifference, calculateBrand, calculatePlan, formatMoney } from "../helpers";

const CotizadorContext = createContext();

 
//Provider: el proveedor de los datos para la aplicación, lugar donde vamos a definir los states, effect y funciones.

const CotizadorProvider = ({children}) => {
    // ----------STATES
    const [data, setData] = useState({
        brand: '',
        year: '',
        plan: '',
})
    const [error, setError] = useState('');
    const [result, setResult] = useState(0);
    const [loading, setLoading] = useState(false);
    

    
    //-----------FUNCTIONS
    const handleChange = (e) => {
        setData({
          ...data,
            [e.target.name]: e.target.value
        })
    }

    const quoteInsurance = () => {

        //Un precio de base
        let base = 2000;

        //Obtener diferencia de años
        const difference = getYearsDifference(data.year);
        
        //Hay que restar el 3% por cada año
        base -= ((difference * 3) * base) / 100;

        //Recargos segun el Segmento: A 5%, B 15%, C 30%
        base *= calculateBrand(data.brand);
        

        //Recargos segun el plan: Básico 20%, Completo 50%
        base *= calculatePlan(data.plan);
        //Formateamos dinero
        base = formatMoney(base);
        
        setLoading(true);
        setTimeout(() => {
            setResult(base);
            setLoading(false);
        }, 2000);
    }

    return (
        <CotizadorContext.Provider 
            value={{
                    handleChange, 
                    data, 
                    error, 
                    setError, 
                    quoteInsurance,
                    result,
                    loading
                }} //Este value SIEMPRE va a ser un objeto, y ponemos las cosas que queremos pasar a la aplicación
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
};

export default CotizadorContext;