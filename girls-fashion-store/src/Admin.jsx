import { useState } from "react";
import "./Admin.css";

function Admin() {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Elegant Silk Saree",
            category: "Sarees",
            price: 2499,
            stock: 12,
            status: "Active",
        },
        {
            id: 2,
            name: "Designer Blouse",
            category: "Blouses",
            price: 899,
            stock: 8,
            status: "Active",
        },
        {
            id: 3,
            name: "Party Wear Kurti",
            category: "Kurtis",
            price: 1299,
            stock: 4,
            status: "Active",
        },
    ]);

    const [showForm, setShowForm] = useState(false);

    const [search, setSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("All");

    const [form, setForm] = useState({
        name: "",
        category: "Sarees",
        price: "",
        stock: "",
    });

    /* SEARCH + FILTER */

    const filteredProducts = products.filter((product) => {
        const searchText = search.toLowerCase().trim();

        const matchesSearch =
            product.name.toLowerCase().includes(searchText);

        const matchesCategory =
            categoryFilter === "All" ||
            product.category === categoryFilter;

        return matchesSearch && matchesCategory;
    });

    /* FORM INPUT */

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    /* ADD PRODUCT */

    const addProduct = (e) => {
        e.preventDefault();

        if (
            !form.name.trim() ||
            !form.price ||
            !form.stock
        ) {
            alert("Please fill all required fields");
            return;
        }

        const newProduct = {
            id: Date.now(),
            name: form.name.trim(),
            category: form.category,
            price: Number(form.price),
            stock: Number(form.stock),
            status: "Active",
        };

        setProducts((prev) => [
            ...prev,
            newProduct,
        ]);

        setForm({
            name: "",
            category: "Sarees",
            price: "",
            stock: "",
        });

        setShowForm(false);
    };

    /* DELETE */

    const deleteProduct = (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (!confirmDelete) return;

        setProducts((prev) =>
            prev.filter((product) => product.id !== id)
        );
    };

    return (
        <div className="admin">

            {/* SIDEBAR */}

            <aside className="sidebar">

                <div className="admin-logo">
                    <div>✨</div>
                    <h2>AKKA'S</h2>
                    <span>FASHION</span>
                </div>

                <nav>

                    <button className="active">
                        📊 Dashboard
                    </button>

                    <button>
                        🛍️ Products
                    </button>

                    <button>
                        📦 Orders
                    </button>

                    <button>
                        👥 Customers
                    </button>

                    <button>
                        🎁 Offers
                    </button>

                    <button>
                        ⚙️ Settings
                    </button>

                </nav>

                <button className="logout">
                    🚪 Logout
                </button>

            </aside>


            {/* MAIN */}

            <main className="admin-main">

                {/* HEADER */}

                <header className="admin-header">

                    <div>
                        <h1>Dashboard</h1>
                        <p>
                            Welcome back, Admin 👋
                        </p>
                    </div>

                    <div className="admin-profile">

                        <div className="profile-circle">
                            A
                        </div>

                        <div>
                            <strong>Admin</strong>
                            <small>Shop Manager</small>
                        </div>

                    </div>

                </header>


                {/* STATS */}

                <section className="stats">

                    <div className="stat-card">

                        <div className="stat-icon">
                            🛍️
                        </div>

                        <div>
                            <span>Total Products</span>
                            <h2>{products.length}</h2>
                        </div>

                    </div>


                    <div className="stat-card">

                        <div className="stat-icon">
                            📦
                        </div>

                        <div>
                            <span>Total Orders</span>
                            <h2>24</h2>
                        </div>

                    </div>


                    <div className="stat-card">

                        <div className="stat-icon">
                            💰
                        </div>

                        <div>
                            <span>Total Sales</span>
                            <h2>₹48,590</h2>
                        </div>

                    </div>


                    <div className="stat-card">

                        <div className="stat-icon">
                            ⚠️
                        </div>

                        <div>
                            <span>Low Stock</span>

                            <h2>
                                {
                                    products.filter(
                                        (product) => product.stock <= 5
                                    ).length
                                }
                            </h2>

                        </div>

                    </div>

                </section>


                {/* PRODUCTS */}

                <section className="products-admin">

                    <div className="admin-section-header">

                        <div>
                            <h2>Products</h2>

                            <p>
                                Manage your fashion collection
                            </p>
                        </div>

                        <button
                            className="add-product-btn"
                            onClick={() => setShowForm(true)}
                        >
                            + Add Product
                        </button>

                    </div>


                    {/* SEARCH + FILTER */}

                    <div className="product-filters">

                        <div className="search-box">

                            <span>🔍</span>

                            <input
                                type="text"
                                placeholder="Search products..."
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                            />

                        </div>


                        <select
                            value={categoryFilter}
                            onChange={(e) =>
                                setCategoryFilter(e.target.value)
                            }
                        >

                            <option value="All">
                                All Categories
                            </option>

                            <option value="Sarees">
                                Sarees
                            </option>

                            <option value="Blouses">
                                Blouses
                            </option>

                            <option value="Kurtis">
                                Kurtis
                            </option>

                            <option value="Chudidars">
                                Chudidars
                            </option>

                            <option value="Collections">
                                Collections
                            </option>

                        </select>

                    </div>


                    {/* TABLE */}

                    <div className="table-container">

                        <table>

                            <thead>

                                <tr>
                                    <th>Product</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>

                            </thead>


                            <tbody>

                                {filteredProducts.map(
                                    (product) => (

                                        <tr key={product.id}>

                                            <td>

                                                <div className="product-name">

                                                    <div className="product-thumb">
                                                        👗
                                                    </div>

                                                    <strong>
                                                        {product.name}
                                                    </strong>

                                                </div>

                                            </td>


                                            <td>
                                                {product.category}
                                            </td>


                                            <td>
                                                ₹{product.price}
                                            </td>


                                            <td>

                                                <span
                                                    className={
                                                        product.stock <= 5
                                                            ? "low-stock"
                                                            : ""
                                                    }
                                                >
                                                    {product.stock}
                                                </span>

                                            </td>


                                            <td>

                                                <span className="active-status">
                                                    ● {product.status}
                                                </span>

                                            </td>


                                            <td>

                                                <div className="action-buttons">

                                                    <button
                                                        title="Edit"
                                                        onClick={() =>
                                                            alert(
                                                                "Edit feature coming next!"
                                                            )
                                                        }
                                                    >
                                                        ✏️
                                                    </button>

                                                    <button
                                                        title="Delete"
                                                        onClick={() =>
                                                            deleteProduct(
                                                                product.id
                                                            )
                                                        }
                                                    >
                                                        🗑️
                                                    </button>

                                                </div>

                                            </td>

                                        </tr>

                                    )
                                )}


                                {filteredProducts.length === 0 && (

                                    <tr>

                                        <td
                                            colSpan="6"
                                            className="no-products"
                                        >
                                            🔍 No products found
                                        </td>

                                    </tr>

                                )}

                            </tbody>

                        </table>

                    </div>

                </section>


                {/* ADD PRODUCT FORM */}

                {showForm && (

                    <div className="form-overlay">

                        <div className="product-form">

                            <div className="form-header">

                                <div>

                                    <h2>
                                        Add New Product
                                    </h2>

                                    <p>
                                        Add a new item to your store
                                    </p>

                                </div>

                                <button
                                    onClick={() =>
                                        setShowForm(false)
                                    }
                                >
                                    ✕
                                </button>

                            </div>


                            <form onSubmit={addProduct}>

                                <div className="image-upload">

                                    <div className="upload-icon">
                                        📷
                                    </div>

                                    <h3>
                                        Product Image
                                    </h3>

                                    <p>
                                        Image upload will be added later
                                    </p>

                                </div>


                                <label>
                                    Product Name *
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Example: Designer Silk Saree"
                                />


                                <div className="form-row">

                                    <div>

                                        <label>
                                            Category *
                                        </label>

                                        <select
                                            name="category"
                                            value={form.category}
                                            onChange={handleChange}
                                        >

                                            <option>Sarees</option>
                                            <option>Blouses</option>
                                            <option>Kurtis</option>
                                            <option>Chudidars</option>
                                            <option>Collections</option>

                                        </select>

                                    </div>


                                    <div>

                                        <label>
                                            Price *
                                        </label>

                                        <input
                                            type="number"
                                            name="price"
                                            value={form.price}
                                            onChange={handleChange}
                                            placeholder="₹ 0"
                                        />

                                    </div>

                                </div>


                                <label>
                                    Stock Quantity *
                                </label>

                                <input
                                    type="number"
                                    name="stock"
                                    value={form.stock}
                                    onChange={handleChange}
                                    placeholder="Enter stock quantity"
                                />


                                <div className="form-actions">

                                    <button
                                        type="button"
                                        className="cancel-btn"
                                        onClick={() =>
                                            setShowForm(false)
                                        }
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="save-btn"
                                    >
                                        Save Product
                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>

                )}

            </main>

        </div>
    );
}

export default Admin;