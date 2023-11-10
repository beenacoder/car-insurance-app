import { Fragment } from "react";
import { BRANDS, YEARS, PLANS } from "../constants";
import useCotizador from "../hooks/useCotizador";
import Error from "./Error";

const InsuranceForm = () => {

    const {handleChange, data, error, setError, quoteInsurance} = useCotizador();


    const handleSubmit = (e) => {
        e.preventDefault();
        if(Object.values(data).includes('')){
            setError('Debes llenar todos los campos');
            return;
        }
        setError('');
        quoteInsurance(); 
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {error && <Error />}
                {/*INPUT MARCAS */}
                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Marca
                    </label>
                    <select
                        name="brand"
                        className="w-full p-3 bg-white border border-gray-200 rounded-md cursor-pointer"
                        onChange={(e)=>handleChange(e)}
                        value={data.brand}
                    >
                        <option value="">-- Selecciona la Marca --</option>
                        {BRANDS.map((brand) => (
                            <option key={brand.id} value={brand.id}>
                                {brand.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* INPUT AÑO */}
                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Año
                    </label>
                    <select
                        name="year"
                        className="w-full p-3 bg-white border border-gray-200 rounded-md cursor-pointer"
                        onChange={(e)=>handleChange(e)}
                        value={data.year}
                    >
                        <option value="">-- Selecciona el Año --</option>
                        {YEARS.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
                {/* PLANES */}
                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Elige un plan de cobertura
                    </label>
                    <div className="flex gap-3 items-center">
                        {PLANS.map(plan => (
                            <Fragment key={plan.id}>
                                <label>{plan.name}</label>
                                <input
                                    type="radio"
                                    name="plan"
                                    value={plan.id}
                                    onChange={(e)=>handleChange(e)}

                                />
                            </Fragment>
                        ))}
                    </div>
                </div>
                <input
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-400 cursor-pointer transition-colors text-white p-3 uppercase font-bold rounded-md"
                    value="Cotizar"
                />
            </form>
        </>
    )
}

export default InsuranceForm