import { useCallback, useRef } from "react";
import useCotizador from "../hooks/useCotizador";
import { BRANDS, PLANS } from "../constants";

const InsuranceResult = () => {

    const { result, data } = useCotizador();
    const { brand, year, plan} = data;
    const yearRef = useRef(year);

    if(result === 0) return null;
    //Usamos useCallback para evitar el re render, unicamente cuando cambie result
    const [brandName] = useCallback(BRANDS.filter(b => b.id === Number(brand)), [result]);
    const [planName] = useCallback(PLANS.filter(p => p.id === Number(plan)), [result]);

    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-600 font-black text-3xl">
                Resumen
            </h2>
            <p className="my-2">
                <span className="font-bold"> Marca: </span>
                {brandName?.name}
            </p>
            <p className="my-2">
                <span className="font-bold"> Plan: </span>
                {planName?.name}
            </p>
            <p className="my-2">
                <span className="font-bold"> Año del Auto: </span>
                {yearRef.current}
            </p>
            <p className="my-2 text-2xl">
                <span className="font-bold"> Valor cotización: </span>
                {result}
            </p>
        </div>
    )
}

export default InsuranceResult;