import Product from "./Product.jsx";

function ProductTab() {
    return (<div className="Product">
        <h2>Blockbuster Deals on Computer Accessories | Shop Now</h2>
        <div className="Products">
            <Product title="Logitech MX Master" special="8000 DPI" feature="5 Programable Buttons" oldPrice={12499} price={8999} />
            <Product title="Apple Pencil (2nd Gen)" special="Intuitive Touch Surface" feature="Designed for iPad Pro" oldPrice={1199} price={9199} />
            <Product title="Zebronics" special="Designed for iPad Pro" feature="Intuitive Touch Surface" oldPrice={1599} price={899} />
            <Product title="Petronics Toad" special="Wireless Mouse 2.4GHz" feature="Optical Orientations" oldPrice={599} price={278} />
        </div>
    </div>)
}

export default ProductTab;