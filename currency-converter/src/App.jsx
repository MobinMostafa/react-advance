import { useState } from "react"
import { InputBox } from "./components";
import CurrencyInfo from "./hooks/CurrencyInfo";
// import imgUrl from "./assets/images/background.jpg"

function App() {

const [amount, setAmount] = useState(0)
const [form, setForm] = useState("usd")
const [to, setTo] = useState("inr")
const [convertedAmount, setConvertedAmount] = useState(0)

const currencyInfo = CurrencyInfo(form)

const options = Object.keys(currencyInfo)

const swap = () => {
  setForm(to)
  setTo(form)
  setConvertedAmount(amount)
  setAmount(setConvertedAmount)
}

const convert = () =>{
   setConvertedAmount(amount * currencyInfo[to])
}
 
  return (
      <>
        <h1 className="text-3xl bg-orange-500 text-center py-3">Currency Convertor</h1>
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_1280.jpg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOption={options}
                                onCurrencyChange={(currency) => setForm(currency)}
                                selectCurrency={form}
                                onAmountChange={(amount) => {
                                    setAmount(amount)
                                }}
                                // value={options}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOption={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                // amountDisabled
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {form.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </>
  )
}

export default App
