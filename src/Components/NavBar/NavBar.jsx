import { UserWidget } from "../UserWidget/UserWidget"

export const NavBar = () => {
    return (
    <nav className="d-flex justify-content-evenly p-4">
        <h2>Turismo Sin Fronteras</h2>
        <div className="">
            <button className="btn btn-secondary mx-1">Paquetes</button>
            <button className="btn btn-secondary mx-1">Aventuras</button>
            <button className="btn btn-secondary mx-1">Contacto</button>
        </div>
    <div className="d-flex ">
        <UserWidget />
        <p className=" mt-2 ">0</p>
    </div>

    </nav>


    )
}
