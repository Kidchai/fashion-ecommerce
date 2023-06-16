import { useNavigate } from "react-router-dom";


function View() {
    const navigate = useNavigate();


    const addProduct = () => {
        navigate("/add/_add");
    };

    return (
            <div className="d-grid gap-2 d-md-flex justify-content-md">
                <button className="btn btn-primary me-md-2 shadow-sm p-3 mb-5" onClick={addProduct}>Add product</button>
            </div>
    );
}

export default View;