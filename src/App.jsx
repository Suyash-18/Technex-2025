import './App.css'
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  let onSubmit = async(data) => {
    let r = await fetch("http://localhost:8080/", {method: "POST", body: JSON.stringify(data)});
    let res = await r.text();
    console.log(res);
  }
  
  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Name'{...register("name")} />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default App
