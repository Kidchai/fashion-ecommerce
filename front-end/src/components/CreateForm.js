import React from "react";
import { useNavigate } from "react-router-dom";

function CreateForm({ product, handleChange, handleSubmit, formTitle, buttonLabel, placeholders }) {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate("/view");
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <div className="card-body">
                            <h3 className="card-title" style={{ marginBottom: "20px"}}>
                                {formTitle}
                            </h3>
                            <form>
                                <div className="form-group">
                                    <label style={{ marginLeft: "1px"}}>
                                        Name:</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder={placeholders.name}
                                        name="name"
                                        value={product.name}
                                        onChange={handleChange}
                                        style={{ marginBottom: "9px", marginTop: "4px" }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{ marginLeft: "1px" }}>
                                        Description:</label>
                                    <input
                                        type="text"
                                        placeholder={placeholders.description}
                                        name="description"
                                        className="form-control"
                                        value={product.description}
                                        onChange={handleChange}
                                        style={{ marginBottom: "9px", marginTop: "4px" }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{ marginLeft: "1px" }}>
                                        Price:</label>
                                    <input
                                        type="text"
                                        placeholder={placeholders.price}
                                        name="price"
                                        className="form-control"
                                        value={product.price}
                                        onChange={handleChange}
                                        style={{ marginBottom: "9px", marginTop: "4px" }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{ marginLeft: "1px" }}>
                                        Category:</label>
                                    <input
                                        type="text"
                                        placeholder={placeholders.category}
                                        name="category"
                                        className="form-control"
                                        value={product.category}
                                        onChange={handleChange}
                                        style={{ marginBottom: "9px", marginTop: "4px" }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{ marginLeft: "1px" }}>
                                        Image URL:</label>
                                    <input
                                        type="url"
                                        placeholder={placeholders.image}
                                        name="image"
                                        className="form-control"
                                        value={product.image}
                                        onChange={handleChange}
                                        style={{ marginBottom: "9px", marginTop: "4px" }}
                                    />
                                </div>
                                <button
                                    className="btn btn-success"
                                    onClick={handleSubmit}
                                    style={{ marginTop: "4px" }}
                                >
                                    {buttonLabel}
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={handleCancel}
                                    style={{ marginLeft: "10px", marginTop: "4px" }}
                                >
                                    Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateForm;